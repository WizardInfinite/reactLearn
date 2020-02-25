const { override, fixBabelImports,addDecoratorsLegacy } = require("customize-cra");
 module.exports = override(
    //  antd的按需加载
     fixBabelImports(
         "import", { 
             libraryName: "antd", 
             libraryDirectory: "es",
              style: "css"
         }),
        //  装饰器
         addDecoratorsLegacy()
 )     