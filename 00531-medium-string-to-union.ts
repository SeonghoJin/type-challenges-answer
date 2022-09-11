type StringToUnion<T extends string> = T extends `${infer A}${infer Rest}` ? A | StringToUnion<Rest> : never;
