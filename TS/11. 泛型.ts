// 1. 泛型变量：使用大写字母 A-Z 定义的类型变量都属于泛型
/**
T（Type）：表示一个 TypeScript 类型
K（Key）：表示对象中的键类型
V（Value）：表示对象中的值类型
E（Element）：表示元素类型
 */
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, yL: T) => T;
}

//2. 泛型工具类型
// typeof
function toArray(x: number): Array<number> {
    return [x];
}

type Func = typeof toArray; // -> (x: number) => number[]

// keyof
interface Person {
    gender: string;
    age: number;
}

type K1 = keyof Person; // "gender" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number

// in
type Keys = "a" | "b" | "c"
type obj = {
    [p in Keys]: any
}// -> {a: any, b: any, c: any}

// infer
type ReturnType<T> = T extends (
    ...args: any[]
) => infer R ? R : any; // 简单说就是用它取到函数返回值的类型方便之后使用。

// extends
// 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
interface ILengthwise {
    length: number
}
function LoggingIdentity<T extends ILengthwise>(args: T): T {
    console.log(args.length);
    return args
}

// partial：Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?
type Partial<T> = {
    [P in keyof T]?: T[P];
};
interface Todo {
    title: string;
    description: string;
}
/**
 * todo 在上面的 updateTodo 方法中，我们利用 Partial<T> 工具类型，定义 fieldsToUpdate 的类型为 Partial<Todo>，即：
 */
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}