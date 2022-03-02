# commonRollup

使用 rollup 进行构建的 js 库通用配置

## rollup 配置

1. 打包三套配置
   1. cjs.min.js && .gz
   2. esm.min.js && .gz
   3. `lib/**/*.js'` > 按需加载使用
2. 使用插件
   1. rollup-plugin-node-resolve: 路径解析、查找第三方模块
   2. rollup-plugin-commonjs: 主要作用是把使用 cmd 规范的包转换成使用 es6 模块规范。举个栗子：就是把 module.exports 变成 export default。
   3. rollup-plugin-babel: 配合 babel 转换 es6/es7 等更加高级的语法
   4. rollup-plugin-json: 支持在 js 文件中引入 json 文件，把 json 文件转换成使用 es6 模块导出的 js 对象，例如：转换 package.json
   5. rollup-plugin-terser: 压缩混淆代码
   6. rollup-plugin-typescript2: 打包支持 TypeScript
   7. rollup-plugin-gzip: 压缩成 gzip 包
   8. rollup-plugin-summary: 打包信息
