type CustomExcldue<T, K> = T extends K ? never : T;
type CustomPick<T, K extends keyof T> = {
    [P in K] : T[P];
}


type MyOmit<T, K extends keyof T> = CustomPick<T, CustomExcldue<keyof T, K>>

interface Todo {
    title: string
    description: string
    completed: boolean
}

type OmitTest = Omit<Todo, 'completed'>;

