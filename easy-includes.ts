import {Equal} from "../../utils";

type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
     ? true
     : Includes<Rest, U>
  : false

type IncludeTest1 = Includes<[{}], { a: 'A' }>;
type IncludeTest2 = Includes<[boolean, 2, 3, 5, 6, 7], false>
type IncludeTest3 = Includes<[true, 2, 3, 5, 6, 7], boolean>
type IncludeTest4 = Includes<[false, 2, 3, 5, 6, 7], false>
type IncldueTest5 = Includes<[{ a: 'A' }], { readonly a: 'A' }>
type IncludeTest6 = Includes<[{ readonly a: 'A' }], { a: 'A' }>
type IncludeTest7 = Includes<[1], 1 | 2>
type IncludeTest8 = Includes<[1 | 2], 1>
