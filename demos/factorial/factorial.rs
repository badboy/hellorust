fn main() {}

#[no_mangle]
pub fn fact(mut n: i32) -> i32 {
    let mut result = 1;
    while n > 0 {
        result = result * n;
        n = n - 1;
    }
    result
}
