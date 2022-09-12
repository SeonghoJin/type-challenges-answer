type ToArray<T, R extends any[] = []> = R['length'] extends T ? R : ToArray<T, [...R, 1]>;
type Sum<A , B> = [...ToArray<A>, ...ToArray<B>]['length'];
type LastElement<T> = T extends [...infer R, infer Last] ? Last: never;
type LastSecondElement<T>= T extends [...infer R, infer Last] ? LastElement<R>: never;

type Fibonacci<T extends number, Ret extends any[] = [1, 1, 2]> = Ret['length'] extends T ? [1, ...Ret][T]: Fibonacci<T, [...Ret, Sum<LastElement<Ret>,LastSecondElement<Ret>>]>;
