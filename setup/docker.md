extends: site.liquid
title: Setup - Docker
path: /setup/docker
---

## Setup

Pull down tomaka's Docker image:

```
docker pull tomaka/rustc-emscripten
```

Start a shell and mount the current directory into it:

```
docker run -it -v $(pwd):/src --rm tomaka/rustc-emscripten /bin/bash
```

Your code is now accessible in `/src` and can be compiled from there:

```
cd /src
rustc --target wasm32-unknown-emscripten hello.rs
```
