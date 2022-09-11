
type Diff<O, O1> = Pick<O & O1, DiffKey<O, O1>>;
type DiffKey<O, O1> = Exclude<keyof O | keyof O1, keyof O1> | Exclude<keyof O | keyof O1, keyof O>;
