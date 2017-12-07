fetch("feistel.wasm", {cache: "no-cache"}).then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, {})
).then(results => {
  let module = {};
  let mod = results.instance;
  module.alloc   = mod.exports.alloc;
  module.dealloc = mod.exports.dealloc;
  module.fill    = mod.exports.fill;
  module.clear   = mod.exports.clear;

  var width  = 320;
  var height = 200;

  let byteSize = width * height * 4;
  var pointer = module.alloc( byteSize );
  var buffer = new Uint8Array(mod.exports.memory.buffer, pointer, byteSize);

  var button = document.getElementById("run-wasm");
  var canvas = document.getElementById('screen');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var pointer = module.alloc( byteSize );

    var usub = new Uint8ClampedArray(mod.exports.memory.buffer, pointer, byteSize);
    var img = new ImageData(usub, width, height);
    var running = false;

    var frame = 0;
    var running = false;
    function step(timestamp) {
      if (!running) return;

      frame = module.fill(pointer, width, height, frame);
      ctx.putImageData(img, 0, 0)

      if (frame != 65536) {
        window.requestAnimationFrame(step);
      } else {
        button.innerText = "Restart";
        running = false;
      }
    }

    function clearCanvasAndRestart() {
      running = false;
      window.requestAnimationFrame(function() {
        ctx.clearRect(0, 0, width, height);
        module.clear(pointer, width, height);
        frame = 0;
        running = true;
        window.requestAnimationFrame(step);
      });
    }

    button.addEventListener("click", function(e) {
      if (running) {
        button.innerText = "Restart";
        running = false;;
      } else {
        button.innerText = "Stop";
        clearCanvasAndRestart();
      }
    });
  }
});
