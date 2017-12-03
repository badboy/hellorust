use std::mem;
use std::slice;
use std::os::raw::c_void;

fn main() {}

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

#[no_mangle]
pub fn fill(pointer: *mut u8, max_width: usize, max_height: usize, time: f64) {

  // pixels are stored in RGBA, so each pixel is 4 bytes
  let byte_size = max_width * max_height * 4;
  let sl = unsafe { slice::from_raw_parts_mut(pointer, byte_size) };

  for i in 0..byte_size {

    // get the position of current pixel
    let height = i / 4 / max_width;
    let width  = i / 4 % max_width;

    if i%4 == 3 {

      // set opacity to 1
      sl[i] = 255;

    } else if i%4 == 0 {

      // create a red ripple effect from the top left corner
      let len = ((height*height + width*width) as f64).sqrt();
      let nb = time  + len / 4.0;
      let a = 128.0 + nb.cos() * 128.0;
      sl[i] = a as u8;


    } else if i % 4 == 2 {

      // create a blue ripple effect from the top right corner
      let width = 500 - width;
      let len = ((height*height + width*width) as f64).sqrt();
      let nb = time  + len / 4.0;
      let a = 128.0 + nb.cos() * 128.0;
      sl[i] = a as u8;
    }
  }
}
