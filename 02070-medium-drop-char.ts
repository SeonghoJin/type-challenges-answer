type FirstChar<T> = T extends `${infer A}${infer B}` ? A: '';
type RestString<T> = T extends `${infer A}${infer B}` ? B: '';
type DropChar<S, C> = S extends '' ? '' : FirstChar<S> extends C ? DropChar<RestString<S>, C>: `${FirstChar<S>}${DropChar<RestString<S>, C>}`;
