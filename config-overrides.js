const {override,fixBabelImports,addLessLoader}=require('customize-cra')
const theme=require('./theme')
module.exports=override(
    fixBabelImports('antd',{
        libraryDirectory:'es',
        style:true,
    }),
    addLessLoader({
        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
            javascriptEnabled: true,
            modifyVars:theme
        },
    }),
)