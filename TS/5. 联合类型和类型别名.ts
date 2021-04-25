// 1. 联合类型： 通常和null或者undefined 一起使用
const sayhello = (name:string | undefined) => {

}

// 2. 可辨识联合
/**
 * 三个要点：可辨识、联合类型和类型守卫
 * 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
 */
enum CarTransmission {
    Automatic = 200,
    Manual = 300
}
// 以下三个接口都包含vType这个属性
interface Motorcycle {
    vType: "motorcycle"; // discriminant
    make: number; // year
}
  
interface Car {
    vType: "car"; // discriminant
    transmission: CarTransmission
}
  
interface Truck {
    vType: "truck"; // discriminant
    capacity: number; // in tons
}
type Vehicle = Truck | Car | Motorcycle;
const EVALUATION_FACTOR = Math.PI;
function evaluatePrice( vehicle: Vehicle){
    switch(vehicle.vType){
        case 'car':
            return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
        case "motorcycle":
            return vehicle.make * EVALUATION_FACTOR;   
    }
}

// 类型别名
type Message = string | string[];
let greet = (message: Message) => {

}