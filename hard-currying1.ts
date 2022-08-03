type Impl<T, K> = T extends [infer A, ...infer Rest] 
  ? (arg: A) => Impl<Rest, K> 
  : K;
  
declare const Currying: <T extends unknown[], R>(fn: (...arg: T) => R) => 
  Impl<T, R>;
