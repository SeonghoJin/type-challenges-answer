type toString<T extends number | string | bigint> = `${T}`;
type Absolute<T extends number | string | bigint> = toString<T> extends `-${infer A}` ? A: toString<T>;
