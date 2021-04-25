// 1. 类的属性与方法
class Greeter {
    static cname: string = 'greeter'
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    static getClassName(){
        return "sth"
    }
    greet(){
        return 'hello' + this.greeting;
    }
}
// 2. 访问器
// 可以通过 getter 和 setter 方法来实现数据的封装和有效性校验，防止出现异常数据
class Employee {
    private _fullName; string;
    get fullName(): string {
        return this._fullName
    }
    set fullName(newName: string) {
        this._fullName = newName;
    }
}

// 3. 类的继承
class Animal {
    name: string;
    
    constructor(theName: string) {
      this.name = theName;
    }
    
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
sam.move();

// 私有字段
/**
私有字段以 # 字符开头，有时我们称之为私有名称；
每个私有字段名称都唯一地限定于其包含的类；
不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
私有字段不能在包含的类之外访问，甚至不能被检测到。
 */
class Person {
    #name: string;
  
    constructor(name: string) {
      this.#name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.#name}!`);
    }
}
  
let semlinker = new Person("Semlinker");
  
semlinker.#name;
//     ~~~~~
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.