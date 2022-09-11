type FirstChar<T> = T extends `${infer A}${infer B}` ? A: '';
type RestString<T> = T extends `${infer A}${infer B}` ? B: '';

type IsEnd<A, B> = A extends '' ? false: B extends '' ? true: false;
type IsSame<A, B> = A extends B ? true : false;

type StartsWith<T extends string, U extends string> = IsEnd<FirstChar<T>, FirstChar<U>> extends true ? true: 
IsSame<FirstChar<T>, FirstChar<U>> extends true ? StartsWith<RestString<T>, RestString<U>>: false;
