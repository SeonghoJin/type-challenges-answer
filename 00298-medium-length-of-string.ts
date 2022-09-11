type LengthOfString<S extends string> = StrToArr<S>['length'];
type StrToArr<S extends string> = S extends `${infer A}${infer Rest}` ? 
  [A, ...StrToArr<Rest>] : [];
