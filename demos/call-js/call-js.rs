extern {
    fn alert(ptr: *const u8, number: u32);
}

#[no_mangle]
pub extern "C" fn run() {
    unsafe {
        let x = b"Hello World!\0";
        alert(x as *const u8, 42);
    }
}
