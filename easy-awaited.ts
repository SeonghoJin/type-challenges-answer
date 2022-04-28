import {W, X, Y, Z} from "./00189-easy-awaited/test-cases";

export type MyAwaited<T> = T extends Promise<infer R> ? R extends Promise<any> ? MyAwaited<R> : R : never 
export type TEST_ARRAY<T> = T extends Array<infer R> ? R : never;
export type TEST_100 = TEST_ARRAY<{x: number, y:number}[]>

type TEST4 = MyAwaited<W>
type TEST5 = MyAwaited<X>
type TEST6 = MyAwaited<Z>
type TEST7 = MyAwaited<Y>

