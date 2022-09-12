type IsBoolean<T> = T extends boolean ? T extends true ? true : false : false;
type BooleanToString<T> = T extends boolean ? T extends true ? 'true' : 'false': never;

type Flip<T> = {
  [P in keyof T as T[P] extends string | symbol | number ? T[P]: IsBoolean<T[P]> extends true ? BooleanToString<T[P]> : never]: P
}
