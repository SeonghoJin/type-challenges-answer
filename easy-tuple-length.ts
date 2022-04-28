type Length<T extends readonly any[]> = T extends {length: number} ? T['length'] : never

type TEST = Length<[1,2,3]>