type AppendArgumentGetParamters<Fn extends (...args: any[]) => any> = Fn extends (...args: infer A) => any ? A : Fn; 
type AppendArgumentReturnType<Fn extends (...args: any[]) => any> = Fn extends (...args: any[]) => infer Return ? Return : never;
type AppendArgument<Fn extends (...args: any[]) => any, A> = (...args : [...AppendArgumentGetParamters<Fn>, A]) => AppendArgumentReturnType<Fn>;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
