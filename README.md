---
This site is unmaintained and read-only.

The [Rust and WebAssembly working group](https://rustwasm.github.io/) now provides a lot of tooling, documentation, tutorials and other material.
For a complete introduction to Rust and WebAssembly check out the [Rust 🦀 and WebAssembly 🕸 book](https://rustwasm.github.io/book/).
---


# [Hello, Rust!](https://www.hellorust.com/)

### A collection of resources, articles, examples and links regarding Rust & WebAssembly

## Website

Everything is automatically deployed and available on [www.hellorust.com](https://www.hellorust.com/).

## Development

The site is built using [Cobalt](https://github.com/cobalt-org/cobalt.rs).
To compile everything and place it into the `build/` folder, execute:

```
cobalt build
```

Deployment is automatically run [through Travis CI](https://travis-ci.org/badboy/hellorust) on every push to the `master` branch.

### Developing examples

Examples are placed in `demos/`. You can copy one of the existing examples or create a new one.
Just pick a good short name as the directory name.

Please add a `Makefile` which compiles and copies all necessary files in place on invocation.
See [demos/add/Makefile](demos/add/Makefile) for a simple example.
Once you have done that add the example's name to the main [Makefile](Makefile), so it can be rebuild easily.

Add an `index.liquid` file for your example and make sure the following header is included:

```
permalink: /demos/slug-of-your-example
title: "Demo: Name of your example"
layout: site.liquid
---
```

Use HTML to structure your example explanation.

## Contributions

All contributions are welcome.
[Please open an issue](https://github.com/badboy/hellorust/issues/new) and tell us about your ideas.
Pull Requests with new resources or examples are welcome as well.

## License [![CC0-badge]][CC0-deed]

Texts and example code on [www.hellorust.com](https://www.hellorust.com/) are licensed under Creative Commons Zero v1.0 Universal License
([LICENSE-CC0](LICENSE-CC0) or https://creativecommons.org/publicdomain/zero/1.0/legalcode)

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in Hellorust by you, as defined in the CC0-1.0 license, shall be
[dedicated to the public domain][CC0-deed] and licensed as above, without any additional
terms or conditions.

External dependencies used in example code remain under their own license.

[CC0-deed]: https://creativecommons.org/publicdomain/zero/1.0/deed.en
[CC0-badge]: https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/cc-zero.svg
