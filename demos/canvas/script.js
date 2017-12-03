fetch("canvas.wasm").then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, { env: { cos: Math.cos } })
).then(results => {
  let module = {};
  let mod = results.instance;
  module.alloc   = mod.exports.alloc;
  module.dealloc = mod.exports.dealloc;
  module.fill    = mod.exports.fill;

  var width  = 500;
  var height = 500;

  let byteSize = width * height * 4;
  var pointer = module.alloc( byteSize );
  var buffer = new Uint8Array(mod.exports.memory.buffer, pointer, byteSize);

  var canvas = document.getElementById('screen');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var pointer = module.alloc( byteSize );

    var usub = new Uint8ClampedArray(mod.exports.memory.buffer, pointer, byteSize);
    var img = new ImageData(usub, width, height);
    var running = false;

    var start = null;
    function step(timestamp) {
      var progress;
      if (start === null) start = timestamp;
      progress = timestamp - start;
      if (progress > 100) {
        module.fill(pointer, width, height, timestamp);

        start = timestamp

        if (running)
          window.requestAnimationFrame(draw);
      } else {
        if (running)
          window.requestAnimationFrame(step);
      }
    }

    function draw() {
      ctx.putImageData(img, 0, 0)
      window.requestAnimationFrame(step);
    }

    //if (running)
      //window.requestAnimationFrame(step);
    var button = document.getElementById("run-wasm");
    button.addEventListener("click", function(e) {
      running = !running;
      if (running) {
        button.innerText = "Stop motion";
        window.requestAnimationFrame(step);
      } else {
        button.innerText = "Start motion";
      }
    });
  }
});

