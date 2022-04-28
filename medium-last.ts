type Last<T extends any[]> = T extends [...infer R, infer Last] ? Last : never;
