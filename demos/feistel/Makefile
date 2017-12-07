NAME=feistel

build: $(NAME).wasm $(NAME).wat

%.wat: %.wasm
	wasm2wat $< > $@

%.wasm: %.big.wasm
	wasm-gc $< $@

%.big.wasm: %.rs
	cargo +nightly build --target wasm32-unknown-unknown --release
	cp ./target/wasm32-unknown-unknown/release/$(NAME).wasm $@
