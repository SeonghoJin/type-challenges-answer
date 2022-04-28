
type Concat<T extends any[], U extends any[]> = [...T, ...U]
type TupleValue<T extends any[]> = {
    [P in T[number]] : T[P];
}

type ConcatTest1 = Concat<[1,2,3] , [1,2,3]>
type TupleValueTest = TupleValue<[1,2,3]>
