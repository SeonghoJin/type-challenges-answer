type Reverse<T> = T extends [...infer Rest, infer Last] ? [Last, ...Reverse<Rest>] : [];
type ReverseTest = Reverse<['a', 'b']>;

type RestTester<T> = T extends [...infer A, infer B] ? [[...A], [B]] : never;

type RestTesterTest1 = RestTester<[1]>