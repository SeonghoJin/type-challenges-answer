type LookUp<U, T> = U extends {
    type: infer A
} ? A extends T ? U : never : never