extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greeting() -> String {
    "hello wasm-pack!".to_string()
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        assert_eq!(greeting(), "hello wasm-pack!".to_string());
    }
}
