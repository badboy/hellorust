build: sha1-digest.wasm sha1-digest.wat

sha1-digest.wat: sha1-digest.wasm
	wasm2wat $< > $@

sha1-digest.wasm: sha1-digest.big.wasm
	wasm-gc $< $@

sha1-digest.big.wasm: sha1-digest.rs
	cargo +nightly build --target wasm32-unknown-unknown --release
	cp target/wasm32-unknown-unknown/release/sha1_digest.wasm $@
