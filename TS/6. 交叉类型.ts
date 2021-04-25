// 交叉类型
interface IPerson {
    id: string;
    age: number;
}
  
interface IWorker {
    companyId: string;
}
  
type IStaff = IPerson & IWorker;
  
const staff: IStaff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
};
  
console.dir(staff)
// 利用&新创建的类型其实是原类型们的子类，用｜创建的新类型是原类型们的父类