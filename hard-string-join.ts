type Foo<T, Delimeter extends string> = T extends [infer A, ...infer Rest] 
  ? A extends string 
  ? Rest['length'] extends 0
  ? `${A}` : `${A}${Delimeter}${Foo<Rest, Delimeter>}`
  : '' 
  : ''; 

declare function join<T extends string>(delimiter: T): <K extends string[]>(...parts: K) => Foo<K, T>
