type Trime<S extends string> = S extends `${infer Left}${infer Right}` ? `${`${isTrim<Left> extends true ? '' : Left}`}${Trime<Right>}` : ''
type TrimRight<S extends string> = Trime<S> extends '' ? '' : S extends `${infer Left}${infer Right}` ? `${Left}${isTrim<TrimRight<Right>> extends true ? '' : TrimRight<Right>}` : ''
type nt = '\n' | '\t'
type blank = ' ' | ''
type isTrim<T> = T extends `${nt}${blank}` | `${blank}${nt}` | blank | nt ? true : false
