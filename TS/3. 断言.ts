// 允许你覆盖她的推断，并且能以任何你想要的方式去分析它


// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
// 类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。
// 它没有运行时的影响，只是在编译阶段起作用。

// 1. 尖括号语法(在jsx中会存在歧义，建议使用2中的as语法)
let someValue: any = "string";
let strLength: number = (<string>someValue).length;

// 2. as语法
let strLength2: number = (someValue as string).length;


// 应用场景
const foo = {};
foo.bar = 123;
foo.bas = 'hello' // 会报错，因为bas和bar属性都不存在于{}
// 这个时候使用类型断言
interface Foo {
    bar: number,
    bas: string
}
const foo2 = {} as Foo; // const foo2: Foo = {}
foo2.bar = 123;
foo2.bas = 'hello'
// const foo2 = <Foo> {如果忘记了某个属性，编译器同样也不会发出错误警告}