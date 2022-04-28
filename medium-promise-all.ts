declare function PromiseAll<T>(values: T): Promise<T>


const promiseAllTest1 = PromiseAll([1, 2, 3] as const)