// 1. 数组的解构
let arr1 = [1,2]
let arr2 = [...arr1, 4,5,6]
// 2. 数组的遍历
let colors: string[] = ['red', 'yellow'];
for(let i of colors){
    console.log(i);
}
//3. 对象解析
let person= {
    age: 18,
    gender: "male"
}
let person2 = {...person, name: "mark"}
