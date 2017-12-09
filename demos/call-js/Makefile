NAME=call-js

build: $(NAME).wasm $(NAME).wat

%.wat: %.wasm
	wasm2wat $< > $@

%.wasm: %.big.wasm
	wasm-gc $< $@

%.big.wasm: %.rs
	rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib $< -o $@
