type First<T> = T extends `${infer A}${infer B}` ? A: '';
type Rest<T> = T extends `${infer A}${infer B}` ? B: '';
type MinusOrPlus<T> = First<T> extends '-' | '+' ? First<T> : '';
type MinusOrPlusSplit<T> = MinusOrPlus<T> extends '' ? T: Rest<T>;
type Percent<T> = T extends `${infer A}%` ? '%': '';
type PercentSplit<T> = T extends `${infer A}%` ? A: T;
type PercentageParser<A extends string> = [MinusOrPlus<A>,MinusOrPlusSplit<PercentSplit<A>>,Percent<A>];
