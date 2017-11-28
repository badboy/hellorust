extends: post.liquid

title: "Factorial with 64-bit integers"
author: Jan-Erik Rediger
date: 28 Nov 2017 12:04:00 +0100
---

I rewrote the [factorial][] example to use 64-bit integers
and do the formatting in Rust (and thus WebAssembly), so larger values are displayed correctly.

## [Factorial example][factorial]

(This also adds proper deallocation of the formatted strings)

[factorial]: /demos/factorial/index.html
