NAME=string-passing

build: $(NAME).wasm $(NAME).wat

%.wat: %.wasm
	wasm2wat $< > $@

%.wasm: %.rs
	cargo +nightly build --release --target wasm32-unknown-unknown
	cp target/wasm32-unknown-unknown/release/string_passing.wasm $@
