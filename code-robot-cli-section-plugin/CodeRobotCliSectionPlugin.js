const HtmlWebpackPlugin = require('html-webpack-plugin');

class CodeRobotCliSectionPlugin {
    constructor(options) {
        console.log("options", "init");
    }

    apply(compiler) {
        // 1. 修改模版文件的路径为壳应用下的 public/index.html,使用html-webpack-plugin
        // 1.1 vue3 的架子默认已经有了 HtmlWebpackPlugin 直接找到修改即可
        const HtmlWebpackPlugin = compiler.options.plugins.find(plugin => plugin.constructor.name === "HtmlWebpackPlugin")
        if (HtmlWebpackPlugin) {
            HtmlWebpackPlugin.userOptions.title = "代码片段应用"
            HtmlWebpackPlugin.userOptions.template = require.resolve('./public/index.html')
        } else {
            const config = {
                title: "代码片段应用",
                template: require.resolve('./public/index.html'),
            }
            compiler.options.plugins.push(new HtmlWebpackPlugin(config))
        }
        console.log("entry", compiler.options.entry);
        // 2. 修改 entry 文件路径（默认指向 src/main.js,修改为壳应用 src/index.js）
        compiler.options.entry.app.import = [require.resolve('./src/index.js')]
        console.log("entry", compiler.options.entry);
        // 3. 让壳应用中的 index.js 能够找到代码片段中的源码文件
        compiler.options.resolve.alias['@section'] = `${process.cwd()}/src/index.vue`
    }
}


module.exports = CodeRobotCliSectionPlugin