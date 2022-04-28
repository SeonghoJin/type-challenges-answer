type MyExclude<T, U> = T extends U ? never : T;
type TEST2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>;
