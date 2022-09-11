type FirstChar<T> = T extends `${infer A}${infer B}` ? A: '';
type RestString<T> = T extends `${infer A}${infer B}` ? B: '';

type FirstElement<T extends Array<any>> = T extends [infer First, ...infer Rest] ? First : [];
type RestArray<T extends Array<any>> = T extends [infer First, ...infer Rest] ? Rest: [];
