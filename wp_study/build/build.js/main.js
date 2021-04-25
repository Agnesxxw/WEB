/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/**\n * webpack的入口起点文件\n * \n * 1. 运行指令\n    * 开发环境： webpack ./src/index.js -o ./build/built.js --mode=development\n    * webpack会以./src/index.js 为入口文件开始打包，打包后输出到 ./build/build.ts\n    * 整体打包环境\n    * 生成环境：webpack ./src/index.js -o ./build/build.js --mode=production\n    * webpack会以./src/index.js 为入口文件开始打包，打包后输出到 ./build/build.ts\n    * 整体打包环境\n * 2. webpack能处理js/json\n * 3. webpack生产环境比开发环境多一个js压缩代码\n */\n\nfunction add(a, b) {\n    return a + b\n}\nconsole.log(add(2,3))\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;