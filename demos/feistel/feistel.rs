use std::mem;
use std::slice;
use std::os::raw::c_void;

#[no_mangle]
pub extern "C" fn alloc(size: usize) -> *mut c_void {
    let mut buf = Vec::with_capacity(size);
    let ptr = buf.as_mut_ptr();
    mem::forget(buf);
    return ptr as *mut c_void;
}

#[no_mangle]
pub extern "C" fn dealloc(ptr: *mut c_void, cap: usize) {
    unsafe  {
        let _buf = Vec::from_raw_parts(ptr, 0, cap);
    }
}

fn feistel_net(input: u16) -> u16 {
    let mut l = input & 0xff;
    let mut r = input >> 8;

    for _ in 0..8 {
        let nl = r;
        let f = (((r * 11) + (r >> 5) + 7 * 127) ^ r) & 0xff;
        r = l ^ f;
        l = nl;
    }

    ((r<<8)|l) & 0xffff
}

#[test]
fn feistel_fills_all() {
    let mut v = vec![0u8; 65536];
    let ones = vec![1u8; 65536];

    for frame in 0..65536u32 {
        let point = feistel_net(frame as u16);
        v[point as usize] = 1;
    }

    assert_eq!(&ones[0..10], &v[0..10]);
}

fn set_pixel(pixels: &mut [u8], width: u16, x: u16, y: u16) {
    let x = x as usize;
    let y = y as usize;
    let width = width as usize;
    let offset = x*4 + y*4 * width;

    pixels[(offset+0)] = 255;
    pixels[(offset+1)] = 0;
    pixels[(offset+2)] = 0;
    pixels[(offset+3)] = 255;
}

#[no_mangle]
pub extern "C" fn clear(pointer: *mut u8, width: usize, height: usize) {
    let byte_size = width * height * 4;
    let buf = unsafe { slice::from_raw_parts_mut(pointer, byte_size) };

    for i in buf.iter_mut() {
        *i = 0;
    }
}

#[no_mangle]
pub extern "C" fn fill(pointer: *mut u8, width: usize, height: usize, mut frame: u32) -> u32 {
    if frame == 65536 {
        return frame;
    }

    // pixels are stored in RGBA, so each pixel is 4 bytes
    let byte_size = width * height * 4;
    let buf = unsafe { slice::from_raw_parts_mut(pointer, byte_size) };

    let width = width as u16;
    let height = height as u16;

    for _ in 0..200 {
        if frame == 65536 {
            break;
        }

        let pos = feistel_net(frame as u16);
        let x = pos % width;
        let y = pos / width;
        if x < width && y < height {
            set_pixel(buf, width, x, y);
        }

        frame += 1;
    }

    frame
}
