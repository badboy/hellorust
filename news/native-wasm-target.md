extends: post.liquid

title: "wasm32-unknown-unknown landed & enabled"
author: Jan-Erik Rediger
date: 26 Nov 2017 12:24:00 +0100
---

Yesterday the
[Pull Request 46115: "rustbuild: Enable WebAssembly backend by default"](https://github.com/rust-lang/rust/pull/46115) was merged into Rust master.
With the Nightly build from that night, the <code>wasm32-unknown-unknown</code> target is natively available.

Once you install that nightly (or any later one from now on), you can compile to WebAssembly without additional tools:

```
rustup update
rustup target add wasm32-unknown-unknown --toolchain nightly
rustc +nightly --target wasm32-unknown-unknown -O hello.rs
```

Support & documentation is still a bit limited, but we're working to expand in this area.
The Rust compiler also does not have a proper linker just now, so final WebAssembly modules will be quite big.
Alex wrote a small tool to reduce the size:

```
cargo install --git https://github.com/alexcrichton/wasm-gc
wasm-gc hello.wasm small-hello.wasm
```

You can find the full instruction [in the `wasm-32-unknown-unknown` setup guide](/setup/wasm-target).

If you want to contribute with examples, documentation, articles or other resources open an issue or pull request on [github.com/badboy/hellorust](https://github.com/badboy/hellorust).
