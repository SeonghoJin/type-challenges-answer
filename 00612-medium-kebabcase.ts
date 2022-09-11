type IsUpperCase<T extends string> = T extends UpperCaseToken ? true : false;
type ToKebabChar<T extends string> = IsUpperCase<T> extends true ? `-${Lowercase<T>}`: T;
type RawKebabCase<S> = S extends `${infer A}${infer Rest}` ?  `${ToKebabChar<A>}${RawKebabCase<Rest>}`: '';
type First<S> = S extends `${infer A}${infer Rest}` ? A: '';
type Rest<S> = S extends `${infer A}${infer Rest}` ? Rest: never; 
type Format<S extends string> = First<S> extends '-' ? 
First<Rest<S>> extends LowercaseToken ? Rest<S> : S
: S; 
type KebabCase<S> = Format<RawKebabCase<S>>;
