(module
  (type (;0;) (func (param i32) (result i32)))
  (type (;1;) (func))
  (func (;0;) (type 0) (param i32) (result i32)
    get_local 0
    i32.const 1
    i32.add)
  (func (;1;) (type 1))
  (table (;0;) 0 anyfunc)
  (memory (;0;) 17)
  (export "memory" (memory 0))
  (export "add_one" (func 0))
  (export "rust_eh_personality" (func 1))
  (data (i32.const 4) "\10\00\10\00"))
