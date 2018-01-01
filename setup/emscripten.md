permalink: /setup/emscripten
title: "Setup - Emscripten"
layout: site.liquid
---
## Setup

To get a `rustc` with Emscripten support all you need is a recent version.
You can install it using [rustup](http://rustup.rs/). Follow these steps:

```
rustup toolchain add stable
rustup target add asmjs-unknown-emscripten --toolchain stable
rustup target add wasm32-unknown-emscripten --toolchain stable
```

You still need the Emscripten SDK, see how to download and install it in detail or follow the simplified steps below (please refer to the official documentation for requirements and installation on Windows):

```
wget https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz
tar -xvf emsdk-portable.tar.gz
cd emsdk_portable
./emsdk update
./emsdk install sdk-incoming-64bit
```

Once everything is set up, you can compile with Emscripten:

```
rustc --target asmjs-unknown-emscripten hello.rs
```

You can also compile to WebAssembly instead:

```
rustc --target wasm32-unknown-emscripten hello.rs
```
