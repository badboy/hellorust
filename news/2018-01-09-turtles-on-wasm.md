title: "Turtles on Wasm"
published_date: "2018-01-09 16:23:00 +0100"
layout: post.liquid
data:
  author: Jan-Erik Rediger
---

Marshall Pierce recently [added WebAssembly support](https://github.com/sunjay/turtle/pull/53) to the Turtle application.
[Turtle](http://turtle.rs/) is a programming environment allowing to create animated drawings with a handful of simple commands.
It's the perfect tool to teach programming and foster creativity. Bringing it to the web makes it even more accessible.
He wrote down his approach for adding Wasm support:

## [Rust and WebAssembly With Turtle](https://varblog.org/blog/2018/01/08/rust-and-webassembly-with-turtle/)

With a bit more effort it might be possible to provide a [Playground](https://play.rust-lang.org/)-like environment to run and code in the browser.
