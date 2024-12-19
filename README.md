# vite-svg-preview-plugin

> 这里是Fork项目修改版，针对svg-preview-plugin的版本进行修复，解决vite引入提示__dirname is not defined的问题，其他功能请参考svg-preview-plugin项目，尊重原作者，谢谢！

说明：解决项目中 svg 文件过多，不好管理的问题（支持 vite 和 webpack）

功能：
- 实时预览 svg，动态更新预览内容
- 复制文件名
- 复制文件路径
- 删除文件

# use

```
npm i -D vite-svg-preview-plugin@latest
```

## options

* dirPath
  * Type: `string | array`
  * Desc: `预览路径`

* open
  * Type: `boolean`
  * Default: `true`
  * Desc: `自动打开预览窗口`

* port
  * Type: `number`
  * Default: 3000
  * Desc: `预览端口`

* deep
  * Type: `boolean`
  * Default: `false`
  * Desc: `是否递归显示 dirPath 里的 svg`

* formatName
  * Type: `function`
  * Desc: `自定义复制内容`

## example

```js
// webpack
const { WebpackPlugin } = require('vite-svg-preview-plugin')

module.exports = {
  plugins: [
    new WebpackPlugin({
      dirPath: path.resolve('src/assets/icons/svg'),
      port: 3000,
      deep: true,
      formatName({name, filePath}) {
        return `<MyIcon name="${name}" />`
      }
    })
  ]
}
```

```js
// vite | rollup
import { VitePlugin } from 'vite-svg-preview-plugin'

module.exports = {
  plugins: [
    VitePlugin({
      dirPath: path.resolve('src/assets/icons/svg'),
      port: 3000,
      deep: true,
      formatName({name, filePath}) {
        return `<MyIcon name="${name}" />`
      }
    })
  ]
}
```