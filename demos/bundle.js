function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
  ).then(results =>
    results.instance
  );
}

function copyCStr(module, ptr) {
  const collectCString = function* () {
    while (module.memory[ptr] !== 0) {
      if (module.memory[ptr] === undefined) { throw new Error("Tried to read undef mem") }
      yield module.memory[ptr]
      ptr += 1
    }
  }

  const buffer_as_u8 = new Uint8Array(collectCString())
  const utf8Decoder = new TextDecoder("UTF-8");
  const buffer_as_utf8 = utf8Decoder.decode(buffer_as_u8);
  return buffer_as_utf8
}

function getStr(module, ptr, len) {
  const getData = function* (ptr, len) {
    for (let index = 0; index < len; index++) {
      if (module.memory[ptr] === undefined) { throw new Error(`Tried to read undef mem at ${ptr}`) }
      yield module.memory[ptr + index]
    }
  }

  const buffer_as_u8 = new Uint8Array(getData(ptr/8, len/8));
  const utf8Decoder = new TextDecoder("UTF-8");
  const buffer_as_utf8 = utf8Decoder.decode(buffer_as_u8);
  return buffer_as_utf8;
}

function newString(module, str) {
  const utf8Encoder = new TextEncoder("UTF-8");
  let string_buffer = utf8Encoder.encode(str)
  let len = string_buffer.length
  let ptr = module.alloc(len)

  for (i = 0; i < len; i++) {
    module.memory[ptr+i] = string_buffer[i]
  }

  return ptr
}
