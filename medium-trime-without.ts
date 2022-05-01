type Without<T extends any[], U> = T extends [infer First, ...infer Right] ?
    First extends WithoutHelper<U> ? Without<Right, U> : [First, ...Without<Right, U>]
    : []
type WithoutHelper<T> = T extends any[] ? T[number] : T
type WithoutTest = Without<[1, 2, 3], [2, 3]>
