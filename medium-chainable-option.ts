declare const chainable: Chainable

type Chainable<O = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<K extends keyof O ? never : O & { [P in K]: V }>
  get(): O
}

const result3 = chainable
  .option('bar', { value: 'Hello World' })
  .option('count', { value: 'Hello World' }) 
  // .option('name', 'type-challenges')
  // .get()
