type RemoveIndexSignature<T> = {
  [P in keyof T as IsIndex<P> extends never ? never: P]: T[P]
};
