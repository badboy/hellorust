build: factorial.wasm factorial.wat

factorial.wat: factorial.wasm
	wasm2wat $< > $@

factorial.wasm: factorial.big.wasm
	wasm-gc $< $@

factorial.big.wasm: factorial.rs
	rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib $< -o $@
