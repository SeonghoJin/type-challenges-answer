export type MyAwaited<T> = T extends Promise<infer R> ? R extends Promise<any> ? MyAwaited<R> : R : never
export type TEST_ARRAY<T> = T extends Array<infer R> ? R : never;
export type TEST_100 = TEST_ARRAY<{ x: number, y: number }[]>
