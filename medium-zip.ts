type Zip<T extends any[], K extends any[]> = T extends [infer A, ...infer Rest] ?
  K extends [infer B, ...infer KRest] ?
      [[A, B], ...Zip<Rest, KRest>]
    : []
  : []