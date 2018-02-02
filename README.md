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
