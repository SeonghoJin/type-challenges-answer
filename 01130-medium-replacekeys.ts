type ChangeNever<U, T> = {
  [P in keyof U]: P extends T ? never : U[P];
}

type RemoveNever<U, Y> = {
  [P in keyof U]: U[P] extends never ? P extends keyof Y ? Y[P] : U[P]: U[P]
};

type ReplaceKeys<U, T, Y> = RemoveNever<ChangeNever<U, T>, Y>
