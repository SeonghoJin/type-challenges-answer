type MyReturnType<T> = T extends (...args: any[]) => any ? T extends (...args: any[]) => infer R ? R : never : never  