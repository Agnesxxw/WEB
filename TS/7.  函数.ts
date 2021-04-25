// 1. 箭头函数
let myBook = [
    {title: "1"},
    {title: "2"}
]
myBook.forEach((title) => {
    console.log(title)
})

// 2. 参数类型和返回类型
function createUserId(name: string, id: number): string {
    return name + id;
}

// 3. 函数类型
let IdGenerator: (chars: string, nums: number) => string;
function createUserIds(name: string, id: number): string {
    return name + id;
}
IdGenerator = createUserId;

// 4. 可选参数及默认参数
function createUserId2(
    name: string = "Semlinker",
    id: number,
    age?: number
): string {
    return name + id;
}

// 5. 剩余参数
function push(array, ...items) {
    items.forEach(function (item) {
      array.push(item);
    });
}
  
let a = [];
push(a, 1, 2, 3);

// 6. 函数的重载
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number | string, b: number) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}