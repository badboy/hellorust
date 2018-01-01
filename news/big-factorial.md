title: "Factorial with 64-bit integers"
published_date: "2017-11-28 12:04:00 +0100"
layout: post.liquid
data:
  author: "Jan-Erik Rediger"
---
I rewrote the [factorial][] example to use 64-bit integers
and do the formatting in Rust (and thus WebAssembly), so larger values are displayed correctly.

## [Factorial example][factorial]

(This also adds proper deallocation of the formatted strings)

[factorial]: /demos/factorial/index.html
