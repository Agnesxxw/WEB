/**任何类型都可以被归为 any 类型。
 * 这让 any 类型成为了类型系统的顶级类型
 * （也被称作全局超级类型）。 
 * TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查
 * 
 * */
 let value: any;

 value.foo.bar; // OK
 value.trim(); // OK
 value(); // OK
 new value(); // OK
 value[0][1]; // OK

 // 如果我们使用 any 类型，就无法使用 TypeScript 提供的大量的保护机制。为了解决 any 带来的问题，TypeScript 3.0 引入了 unknown 类型。
 // unknown是另一种顶级类型，所有类型都可以赋值给unknown
let value2: unknown;

value2 = true; // OK
value2 = 42; // OK
value2 = "Hello World"; // OK
value2 = []; // OK
value2 = {}; // OK
value2 = Math.random; // OK
value2 = null; // OK
value2 = undefined; // OK
value2 = new TypeError(); // OK
value2 = Symbol("type"); // OK
// 但是unknown 类型只能被赋值给 any 类型和 unknown 类型本身
let value3: boolean = value2; // Error