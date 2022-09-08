type Trime<S extends string> = S extends `${infer Left}${infer Right}` ? `${`${isTrim<Left> extends true ? '' : Left}`}${Trime<Right>}` : ''
type TrimRight<S extends string> = Trime<S> extends '' ? '' : S extends `${infer Left}${infer Right}` ? `${Left}${isTrim<TrimRight<Right>> extends true ? '' : TrimRight<Right>}` : ''
type nt = '\n' | '\t'
type blank = ' ' | ''
type isTrim<T> = T extends `${nt}${blank}` | `${blank}${nt}` | blank | nt ? true : false;
type IsBlank<S extends string> = S extends ' ' ?
  true :
  S extends '\n' ?
  true :
  S extends '\t' ?
  true :
  false

type TrimLeft<S extends string> = IsBlank<First<S>> extends true ? `${TrimLeft<Rest<S>>}` : S; 
type First<S extends string> = S extends `${infer first}${infer rest}` ? first: '';
type Rest<S extends string> = S extends `${infer first}${infer rest}` ? rest: '';
type Trim<T extends string> = TrimLeft<TrimRight<T>>;
