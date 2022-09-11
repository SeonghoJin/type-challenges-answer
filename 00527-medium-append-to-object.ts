type AppendToObject<T, U extends string | number | symbol, V> = {
  [P in U | keyof T]: P extends keyof T ? T[P]: V
};
