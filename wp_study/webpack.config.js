/**
 * webpack的配置文件
 * 作用：
 *      当你运行webpack指令时，回家在里面的配置
 * 
 * 所有的构建工具都是基于ndejs平台运行的，模块化默认采用commonjs
 */

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取单独的css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
// 设置nodejs的环境变量
process.env.NODE_ENV = 'development';
module.exports = {
    // 入口起点
    entry:'./src/index.js',
    // 输出
    output:{
        //输出文件名
        filename:'built.js',
        // __dirname nodejs变量，代表当前文件的目录的绝对路径，一下输出路晋为webpack/build
        path: resolve(__dirname, 'build')
    },
    module:{
        rules:[
            // 不同的文件必须配置不同的loader进行处理

            // 处理css的loader配置
            {
                //详细的loader配置
                // 匹配哪些文件
                test: /\.css$/,
                use:[
                    // use中loader的执行顺序：从右到左，从下到上 依次执行
                    // 创建stye标签，将js中的样式资源插入html，添加到head中生效
                    'style-loader',
                    // css-loader先执行，将css文件编程commonjs的模块加载到js中，里面的内容是样式字符串
                    'css-loader'
                ]
                
            },
            // 处理less的loader配置
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    
                    'css-loader',
                    // 最先执行，将less文件编译成css文件
                    'less-loader'
                ]
            },
            // 处理图片的loader配置
            {
                test: /\.(jpg|png|gif)$/,
                // 使用单个loader的时候可以直接写loader,默认处理不了html中的img
                loader: 'url-loader', // 还依赖于file-loader,是依赖es6去处理的
                options:{
                    // 图片大小小于8kb，就会被base64处理（一般8kb-12kb的图片）
                    // 优点： 减少请求数量（减轻服务器的压力）；缺点： 图片体积会更大（文件请求速度变慢）
                    limits: 8 * 1024,
                    esModule: false, // 和html-loader不一样，解析的时候会出现问题[object, Module],解决： 关闭url-loader的es6模块化，使用commonjs解析
                    // 此问题在webpack4.0以上已解决
                    name:'[hash:10].[ext]' //重命名，原哈希值的前十位+原扩展名
                }
            },
            { // 将css文件打包成单独的css文件
                test: /.\css$/,
                use:[
                    MiniCssExtractPlugin.loader, // 取代style-loader，提取js中的css成单独文件
                    'css-loader',
                    /**
                     * css兼容性处理： po stcss --》 postcss-loader postcss-preset-env
                     * 帮postcss找到package.json中browserslist里面的配置，通过配置加载制定的css兼容性样式
                     * "browserlist":{
                     *  开发环境 --》设置node环境变量： process.env.NODE_ENV = development
                            "development":[
                            "last 1 chrome version",
                            "last 1 firefox version",
                            "last 1 safari version"
                            ],
                            // 默认都是看production生产环境
                            "production":[
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                            ]
                        }
                     */
                    {
                        loader: 'postcss-lader',
                        options:{
                            ident:'postcss',
                            plugins: () => {
                                // postcss插件
                                require('postcss-preset-env')()
                            }
                        }
                    }
                ]
            },
            {
                test:/.html$/,// 默认使用commonjs来处理图片的，和url-loader不一样，解析的时候会出现问题[object, Module]
                
                loader:'html-loader'// 处理html文件中的img图片，负责引入这个图片，从而能被url-loader进行处理
            },
            // 打包其他资源一律用file-loader
            {
                exclude: /.(css|html|less|js|img|png|gif|json)$/, // 排除这几个资源以外的其他资源
                loader: 'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            },
            // esliint兼容性处理
            {
                exclude:/node_modules/,
                test:/\.js$/,
                loader: "babel-loader",
                options:{
                    // 预设： 指示babel做怎样的兼容性处理
                    presets:['@babel/preset-env']
                }
            },
            // eslint语法检查,只检查自己的源代码，第三方库是不用检查的
            // 还需要自己设置检查规则，在package.json中eslintConfig设置：
            // airbnb --> eslint-config-airbnb-base eslint eslint-plugin-import
            {
                exclude:/node_modules/,
                test:/\.js$/,
                loader:'eslint-loader',
                options: {
                    fix:true,
                }
            }
        ],   
    },
    plugins:[
        // 详细的plugin配置
        // 功能： 默认会创建一个空的HTML，引入打包输出的所有资源（js/css）
        // 需求： 需要有结构的HTML文件
        new HtmlWebpackPlugin({
            // 复制'./src/index.html'HTML文件。并且会自动引入打包输出所有的资源（eg： js和css都会，例如built.js）
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 对输出文件重命名
            filename:'css/built.css'
        }),
        new OptimizeCssAssetsWebpackPlugin()

    ],
    mode: "development", // production

    //开发服务器：自动化编译，打开浏览器，刷新浏览器
    // 没有输出，只会在内存中编译打包，不会有任何输出
    // 启动webdevServer的指令： npx webpack-dev-server
    devServer:{
        contentBase: resolve(__dirname, 'build'),
        compress: true, // 启动gzip压缩
        port:3000, // 端口号
        open: true, // 自动打开浏览器
    }
}