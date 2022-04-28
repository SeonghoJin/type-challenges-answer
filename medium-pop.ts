type Pop<T extends any[]> = T extends [...infer A, infer S] ? A: never;
