type BEM<B extends string, E extends string[], M extends string[]> = `${B}${BEM_E<E>}${BEM_M<M>}`
type BEM_E<E extends string[]> = E['length'] extends 0 ? '' : `__${E[number]}`
type BEM_M<M extends string[]> = M['length'] extends 0 ? '' : `--${M[number]}`
type BEMTEST1 = BEM<'btn', ['price', 'hello'], ['hi', 'hello', 'asd', 'asd,' ,' test2']>;

