type IndexOf<T extends any[], U, K extends any[] = []> = T extends [infer A, ...infer B] ? IndexOfEqual<A, U> extends true ? K['length'] : IndexOf<B, U, [...K, A]> : -1
type IndexOfTest = IndexOf<[1, 2, 3], 4>
type IndexOfEqual<A, B> = A extends B ? B extends A ? true : false : false
