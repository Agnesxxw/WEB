/**
 * webpack的入口起点文件
 * 
 * 1. 运行指令
    * 开发环境： webpack ./src/index.js -o ./build/built.js --mode=development
    * webpack会以./src/index.js 为入口文件开始打包，打包后输出到 ./build/build.ts
    * 整体打包环境
    * 生成环境：webpack ./src/index.js -o ./build/build.js --mode=production
    * webpack会以./src/index.js 为入口文件开始打包，打包后输出到 ./build/build.ts
    * 整体打包环境
    
 * 2. webpack能处理js/json
 * 3. webpack生产环境比开发环境多一个js压缩代码
 * 4. 生产环境核开发环境将ES6模块化编译成浏览器能识别的模块化
 */
import "./index.css";

function add(a, b) {
    return a + b
}
console.log(add(2,3))