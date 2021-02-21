// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: '/peanut-utils-docs/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'Peanut-utils 工具函数库', // 标题
  description: '专注前端开发，分享技术心得', // 标题下的描述
  
  themeConfig: { // 主题配置
    logo: '/logo.png',
    nav: [ // 头部导航
      {text: 'GitHub', link: 'https://github.com/peanut-dev'}
    ],
    sidebar: [ // 左侧导航
      {
        title: '标题1', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'chapter1/test',
        ]
      },
      {
        title: '标题2',
        collapsable: false,
        children: []
      },
      {
        title: '标题3',
        collapsable: false,
        children: []
      },
    ],
    // sidebarDepth: 3 // 左侧导航的深度默认是2级
  },

  head: [ // 指定网页head图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ]
}