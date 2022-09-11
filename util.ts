type FirstChar<T> = T extends `${infer A}${infer B}` ? A: '';
type RestString<T> = T extends `${infer A}${infer B}` ? B: '';
