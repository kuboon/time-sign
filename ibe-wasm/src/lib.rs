#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let a = 2+2;
        assert_eq!(a, 4);
    }
}

#[no_mangle]
pub extern "C" fn square(x: u32) -> u32 {
    x * x
}

