(module
  (type (;0;) (func (param i32 i32)))
  (type (;1;) (func))
  (import "env" "alert" (func (;0;) (type 0)))
  (func (;1;) (type 1)
    i32.const 12
    i32.const 42
    call 0)
  (func (;2;) (type 1))
  (table (;0;) 0 anyfunc)
  (memory (;0;) 17)
  (export "memory" (memory 0))
  (export "run" (func 1))
  (export "rust_eh_personality" (func 2))
  (data (i32.const 4) " \00\10\00")
  (data (i32.const 12) "Hello World!\00"))
