extends: site.liquid
title: Setup - Wasm target
path: /setup/wasm-target
---

## Setup

**Caution: This stuff is not merged into Rust yet and might change at any time**

Clone Alex' fork of Rust including the new `wasm32-unknown-unknown` target:

```
git clone --branch add-wasm-target https://github.com/alexcrichton/rust
```

Configure and build the compiler (**Caution: this takes quite some time**):

```
cd rust
./configure --target=wasm32-unknown-unknown --set llvm.experimental-targets=WebAssembly
./x.py build
```

Compile your code to WebAssembly:

```
./build/x86_64-unknown-linux-gnu/stage2/bin/rustc -O --target wasm32-unknown-unknown hello.rs
```

You will end up with a `hello.wasm`. It will be quite big. To reduce size, first install `wasm-gc`:

```
cargo install --git https://github.com/alexcrichton/wasm-gc
```

Then run it to reduce the size of the WebAssembly module:

```
wasm-gc hello.wasm small-hello.wasm
```
