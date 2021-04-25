/**
 * require函数两个作用： 
 *  执行导入的模块中的代码；返回导入模块中的接口对象
 */

let a = require('./index')
let b = "123"
let c = "345"
/**
 * 2. exports导出： exports是默认导出的对象
 * 导出当前模块的公共方法或者属性，别的模块使用require导入的就是exprots的对象
 * exports.name (name就是导出的对象明)
 * exports其实是对module.exports的音引用
 * 注意： 使用exports的时候只能单独设置属性
 */
exports.b = b 
exports = {user: "xiaoming"} // 并不会改变导出的b和c，因为看的是module.exports

/**
 * 3. module.exports 和exports导出的对象是同一个对象
 * module.exports.c = c
 * 在module.exports中可以单个设置属性，也可以整体赋值
 */
 module.exports.c = c
 module.exports = {user: '1234'}

 /**
  * 4. 模块的加载：
  *     模块只会在加载的第一次执行，不会重复（多次导入的时候只会执行一次）
  *     多次加载的都是同一对象
  */