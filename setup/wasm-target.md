extends: site.liquid
title: Setup - Wasm target
path: /setup/wasm-target
---

## Setup

<aside>
<p>
Since 20th November, 2017 the
<a href="https://github.com/rust-lang/rust/pull/45905">Pull Request 45905: "std: Add a new wasm32-unknown-unknown target"</a>
 is merged into Rust master.
It is contained in Nightly builds, but the LLVM backend is not enabled.
</p>
</aside>

<aside>
<p>
Since 25th November, 2017 the
<a href="https://github.com/rust-lang/rust/pull/46115">Pull Request 46115: "rustbuild: Enable WebAssembly backend by default"</a>
 is merged into Rust master.
With the Nightly build from that night, the <code>wasm32-unknown-unknown</code> target is natively available.
</p>
</aside>

Install the latest nightly (2017-11-25 or later):

```
rustup update
```

Install the required component:

```
rustup target add wasm32-unknown-unknown --toolchain nightly
```

Compile your code to WebAssembly:

```
rustc +nightly --target wasm32-unknown-unknown -O hello.rs
```

You will end up with a `hello.wasm`. It will be quite big. To reduce size, first install `wasm-gc`:

```
cargo install --git https://github.com/alexcrichton/wasm-gc
```

Then run it to reduce the size of the WebAssembly module:

```
wasm-gc hello.wasm small-hello.wasm
```
