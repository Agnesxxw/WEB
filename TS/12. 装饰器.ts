/**
它是一个表达式
该表达式被执行后，返回一个函数
函数的入参分别为 target、name 和 descriptor
执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
 */

/**
 * 装饰器的分类：
    类装饰器（Class decorators）
    属性装饰器（Property decorators）
    方法装饰器（Method decorators）
    参数装饰器（Parameter decorators）
*/

// 1. 类装饰器
function Greeter(greeting: string) {
    return function (target: Function) {
      target.prototype.greet = function (): void {
        console.log(greeting);
      };
    };
  }
  
@Greeter("Hello TS!")
class Greeting {
    constructor() {
      // 内部实现
    }
}
  
let myGreeting = new Greeting();
myGreeting.greet(); // console output: 'Hello TS!';

// 2. 属性装饰器
/**
 * 
 * @param target Object - 被装饰的类
 * @param key  string | symbol - 被装饰类的属性名
 */
function logProperty(target: any, key: string) {
    delete target[key];
  
    const backingField = "_" + key;
  
    Object.defineProperty(target, backingField, {
      writable: true,
      enumerable: true,
      configurable: true
    });
  
    // property getter
    const getter = function (this: any) {
      const currVal = this[backingField];
      console.log(`Get: ${key} => ${currVal}`);
      return currVal;
    };
  
    // property setter
    const setter = function (this: any, newVal: any) {
      console.log(`Set: ${key} => ${newVal}`);
      this[backingField] = newVal;
    };
  
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
}
  
class Person { 
    @logProperty
    public name: string;
  
    constructor(name : string) { 
      this.name = name;
    }
}
  
const p1 = new Person("semlinker");
p1.name = "kakuqo";

// 3. 方法装饰器
/**
 * 
 * @param tarage  Object - 被装饰的类
 * @param key  string | symbol - 方法名
 * @param descriptor TypePropertyDescript - 属性描述符
 */
function LogOutput(tarage: Function, key: string, descriptor: any) {
    let originalMethod = descriptor.value;
    let newMethod = function(...args: any[]): any {
      let result: any = originalMethod.apply(this, args);
      if(!this.loggedOutput) {
        this.loggedOutput = new Array<any>();
      }
      this.loggedOutput.push({
        method: key,
        parameters: args,
        output: result,
        timestamp: new Date()
      });
      return result;
    };
    descriptor.value = newMethod;
}
  
class Calculator {
    @LogOutput
    double (num: number): number {
      return num * 2;
    }
}
  
let calc = new Calculator();
calc.double(11);
// console ouput: [{method: "double", output: 22, ...}]
console.log(calc.loggedOutput); 

// 4. 参数装饰器
/**
 * 
 * @param target Object - 被装饰的类
 * @param key string | symbol - 方法名
 * @param parameterIndex  number - 方法中参数的索引值
 */
function Log(target: Function, key: string, parameterIndex: number) {
    let functionLogged = key || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
      been decorated`);
  }
  
class Greeter {
    greeting: string;
    constructor(@Log phrase: string) {
      this.greeting = phrase; 
    }
}
  
  // console output: The parameter in position 0 
  // at Greeter has been decorated
