// declaring variables
const a = 1

let b: number | string | boolean = 2
b = 3
b = 'd'
b = true

const c = 'jdiosajiosdajio' // string
const d = 1 // number
const e = true // boolean

export const sum = (a: number, b: number) => {
  const c = a + b
  return c
} // function

// declaring objects
const f: Record<string, number | string | boolean | Record<string, number>> = {
  a: 1,
  b: 'string',
  c: false,
  d: {
    a: 1
  }
} // object

// dot notation object (access attributes of an object)
const r = f.a
const x = f.d

// bracket notation
const rr = f['a']
const rrr = f['d']['a']

