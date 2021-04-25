// bool
let isDone: boolean = false;
// string
let myName: string = 'helleo';
// Number
let age: number = 18;
// symbol
const sym = Symbol();
let obj = {
  [sym]: "semlinker",
};
// Array
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3,4]; // 泛形语法

// Enum
enum Direction {
    NORTH, // 0 默认为0，也可以指定值
    SOUTH, // 1
    WEST, // 2
    EAST // 3
} 
let dir: Direction = Direction.WEST; // 2

// 反向映射
enum Enum {
  A, // "A"
  B, // "B"
  C = "C",
  D = "D",
  E = 8,
  F,
}
console.log(Enum.A) //输出：0
console.log(Enum[0]) // 输出：A

// Tuple类型
// 数组一般用来存储相同类型的值，所以可以使用元组
// 这是ts中特有的，js终是没有的,必须要提供每个属性的值
// 和数组的使用相同
let tupleList: [string, boolean];
tupleList = ['hello', true];

// void类型，和any相反
// 声明一个 void 类型的变量没有什么作用，因为它的值只能为 undefined 或 null：
function warnUser(): void {
  // 没有 return
}

// null和undefined类型
/**默认情况下 null 和 undefined 是所有类型的子类型。 
 * 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
 * 然而，如果你指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。 */
 let u: undefined = undefined;
 let n: null = null;


 // Never 类型
 function err(msg: string) : never {
   throw new Error(msg)
 }

 function infiniteLoop(): never {
  while (true) {}
}
// 还可以利用never来进行全面性检查
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}
// 如果Foo被改变成type Foo = string | number | boolean;，但是controlFlowAnalysisWithNever中的控制流程没有改变，这个时候else中的foo类型
// 就会呗收窄为 boolean，就不能被赋never类型，就会产生编译错误
// 总结： 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。