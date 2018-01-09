title: "New Year's Roundup"
published_date: "2018-01-08 11:45:00 +0100"
layout: post.liquid
data:
  author: Jan-Erik Rediger
---

The last post on here was a while back. Since then a lot of things happened in the Rust and WebAssembly world, so here's a quick roundup to get up to speed.

## [YEW - a framework for client-side web-apps](https://github.com/DenisKolodin/yew)

Inspired by Elm and ReactJS it has a MVC approach, a virtual DOM, HTML templates with Rust inside and data conversions built-in.
And apparently [it's fast as well as benchmarks show](https://github.com/DenisKolodin/todomvc-perf-comparison).

## Support for Rust/Wasm in Parcel

Two weeks ago [initial support for Rust and Wasm](https://github.com/parcel-bundler/parcel/pull/312) landed in Parcel, a web application bundler.
It can automatically (re-)compile your Rust sources when they change and import the resulting Wasm module in your JavaScript code.

## [wasm-bindgen](https://github.com/alexcrichton/wasm-bindgen)

A CLI and Rust dependency that will generate the necessary JavaScript bindings to your Rust code, so you can skip writing most of the boilerplate (boilerplate such as [wasm-experiments](https://github.com/killercup/wasm-experiments)).
It generates TypeScript for now, which gives you proper types on the JavaScript side as well.

## stdweb and cargo-web

[stdweb](https://github.com/koute/stdweb/), "a standard library for the client-side Web" gained support for `wasm32-unknown-unknown` in December,
including a `js!` macro to call into JavaScript functions from your Rust code.
In combination with [cargo-web](https://github.com/koute/cargo-web), a cargo subcommand taking care of the compile step, this allows for powerful new web applications implemented in Rust.
The above mentioned YEW is built on top of stdweb.

## More

People are playing around with the new small WebAssembly target more and more.

* [Porting a roguelike game to WebAssembly.](https://aimlesslygoingforward.com/blog/2017/12/25/dose-response-ported-to-webassembly/) - A detailed post on what it took to port the game to the web browser
* [Try to make gluon compile compile to WASM](https://github.com/gluon-lang/gluon/issues/424) - Gluon is a embeddable language written in Rust
* [Implement extensible syscall interface for wasm](https://github.com/rust-lang/rust/pull/47102) - An attempt to introduce a syscall interface in order to interact with the the runtime environment


**You did something with Rust and WebAssembly? [Let us know!](https://github.com/badboy/hellorust/issues/new)**
