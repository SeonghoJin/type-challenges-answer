type MyReadonly<T extends object> =  {
    readonly [P in keyof T] : T[P]
}
