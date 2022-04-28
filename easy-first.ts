type First<T extends any[]> = T extends T ? T extends never[] ? never : T[0] : never[]
