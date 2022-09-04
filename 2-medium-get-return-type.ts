type MyReturnType<T> = T extends (...args: any[]) => infer B ? B : never; 
