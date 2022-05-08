type Unique<T extends any[], cum extends any[] = []> = T extends [infer A, ...infer Rest] ?
    IsIn<cum, A> extends true ? [...Unique<Rest, cum>] : [A, ...Unique<Rest, [...cum, A]>] : []

type EqualHelper<A, B> = any extends A ?
    any extends B ?
    EqualHelper<IsAnyOrUnknown<A>, IsAnyOrUnknown<B>> :
    A extends B ? B extends A ? true : false : false :
    A extends B ? B extends A ? true : false : false

type IsIn<T extends any[], K> = T extends [infer A, ...infer Rest] ? EqualHelper<A, K> extends true ? true : IsIn<Rest, K> : false
type IsInTest = IsIn<['1', '2', '3'], '3'>
type UniqueTest = Unique<[1, 'a', 2, 'b', 2, 'a']>
// type UniqueTest2 = Unique<[unknown, unknown, any, any, never, never]>
type unknownAndAny = unknown extends never ? true : false

type IsAnyOrUnknown<T> = T extends never ? infer A : never
type EqualHelperTest = IsAnyOrUnknown<any>
type GetAnyOrUnknown<T extends any | unknown> = T extends never ? any : unknown
type test11 = unknown extends never ? true : false

type What<T extends any[], K> = K extends T[number] ? T : never
type WhatTest = What<[number, string], 1>
