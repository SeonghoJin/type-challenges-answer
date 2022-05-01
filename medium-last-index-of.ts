type LastIndexOf<T extends any[], U, K extends any[] = []> = T extends [infer A, ...infer B] ? LastIndexOf<B, U, [...K, A]> extends -1 ? LastIndexOfHelper<A, U, [...K]['length']> : LastIndexOf<B, U, [...K, A]> : -1
type LastIndexOfTest = LastIndexOf<[1, 2, 3], 3>
type LastIndexOfEqual<A, B> = A extends B ? B extends A ? true : false : false
type LastIndexOfHelper<B, U, K> = LastIndexOfEqual<B, U> extends true ? K : -1

