// 对行为的抽象，而具体如何行动需要由类去实现
// ts 中除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

//1. 对象的形态
interface Person {
    readonly name: string, //只读属性用于限制只能在对象刚刚创建的时候修改其值。
    age: number,
    [propsName: string]: any // 任意属性
}