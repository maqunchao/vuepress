keyof 索引查询, 对于泛型T, keyof T的结果为该类型上所有共有属性key的联合.

T[K]索引访问

```type
interface Eg1 {
  name: string,
  readonly age: number,
}
// string
type V1 = Eg1['name']
// string | number
type V2 = Eg1['name' | 'age']
// any
type V2 = Eg1['name' | 'age2222']
// string | number
type V3 = Eg1[keyof Eg1]
```



1.Omit 剔除已定义对象中 自己不需要的一部分形成新的定义类型, `Omit<T, K>`从类型`T`中剔除`K`中的所有属性。

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

```

2. Pick 采集, 可采集已定义对象中属性,形成新的定义类型

   ```type
   /**
    * 利用Pick实现Omit
    */
   type Omit = Pick<T, Exclude<keyof T, K>>;
   ```

   

3. partial 可把已定义的对象(必选+可选项)类型全部转化为可选类型

   ```typescript
   /**
    * 核心实现就是通过映射类型遍历T上所有的属性，
    * 然后将每个属性设置为可选属性
    */
   type Partial<T> = {
     [P in keyof T]?: T[P];
   }
   ```

   

4. required(必选的)

5. readonly(转化为只读)

6. Extract(提取/包括)

   ```type
   Extract<T, U>提取联合类型T和联合类型U的所有交集。
   type Extract<T, U> = T extends U ? T : never;
   
   type Eg = Extract<'key1' | 'key2', 'key1'>
   
   ```

   

7. Exclude(排除/不包括)

   ```type
   Exclude<T, U>提取存在于T，但不存在于U的类型组成的联合类型。
   
   /**
    * 遍历T中的所有子类型，如果该子类型约束于U（存在于U、兼容于U），
    * 则返回never类型，否则返回该子类型
    */
   type Exclude<T, U> = T extends U ? never : T;
   
   /**
    * @example
    * type Eg = 'key1'
    */
   type Eg = Exclude<'key1' | 'key2', 'key2'>
   ```

   参考:https://www.jianshu.com/p/95d1df0b1876