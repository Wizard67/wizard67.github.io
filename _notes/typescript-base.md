---
---

Quick strat
: ### installing

  ```bash
  npm install -g typescript
  ```

: ### compiling

  ```bash
  tsc script.ts
  ```

^

Basic type
: ### Boolean

  ```typescritp
  let isDone: boolean = false
  ```

: ### Number

  ```typescritp
  let decLiteral: number = 6          // 十进制
  let hexLiteral: number = 0xf00d     // 十六进制
  let binaryLiteral: number = 0b1010  // 二进制
  let octalLiteral: number = 0o744    // 八进制
  ```

: ### String

  ```typescritp
  let name: string = 'bob'
  let greeter: string = `hello, ${name}.`
  ```

: ### Array

  ```typescritp
  let list: number[] = [1, 2, 3]
  let list1: Array<number> = [1, 2, 3]
  ```

: ### Tuple

  ```typescritp
  let x: [string, number]
  x = ['hello', 10]        // ok
  x = [10, 'hello']        // error
  x[3] = 'world'           // ok
  x[4] = false             // error
  ```

: ### enum

  ```typescritp
  enum Color {Red = 1, Green, Blue}
  let colorName: string = Color[2]
  console.log(colorName)
  ```

  > Green

: ### Any

  ```typescritp
  let notSure: any = 4
  notSure = "maybe a string instead"
  notSure = false
  ```

: ### Void

  ```typescritp
  function warnUser(): void {
      console.log("This is my warning message")
  }
  ```

: ### Null & undefined

  ```typescritp
  let u: undefined = undefined
  let n: null = null
  ```

  使用联合类型时禁止其成为所有类型的子类

  ```bash
  --strictNullChecks
  ```

: ### Never

  ```typescritp
  function error(message: string): never {
    throw new Error(message)
  }
  ```

: ### 类型断言

  ```typescritp
  let someValue: any = "this is a string"
  let strLength: number = (<string>someValue).length
  let strLength1: number = (someValue as string).length
  ```

^
