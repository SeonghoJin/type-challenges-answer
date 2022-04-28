export type CustomPick<A, B extends keyof A> = {
    [P in B] : A[B]
}