type Join<T extends string[], U extends string | number> = T extends [infer A, ...infer B] ? JoinHelper<B> extends true ? `${A}${U}${Join<B, U>}` : `${A}` : ''
type JoinHelper<T> = T extends string[] ? T['length'] extends 0 ? false : true : false

type JoinTest = Join<["a", "b", "c"], '-'>

type JoinHelperTester<T extends any[]> = T extends [infer A, ...infer B] ? B : never
type JoinHelperTest = JoinHelperTester<[]>


