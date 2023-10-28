import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import navbar from './navbar'

export default defineUserConfig({
  // 部署站点的基础路径
  base: '/',

  // 站点的语言
  lang: 'zh-CN',

  // 站点的标题
  title: '老嗨学Java',

  // 站点的描述
  description: '老嗨的Java学习笔记',

  // 默认主题配置
  theme: defaultTheme({
    // Logo图片
    logo: '/logo.png',

    // 导航栏配置，设置为 false 可以禁用导航栏
    navbar,

    // 项目仓库的URL
    repo: 'https://github.com/laohix/laohix.github.io',

    // 仓库链接的文字，默认：GitHub
    repoLabel: 'GitHub',

    // 侧边栏配置
    // sidebar: {[path: string]: SidebarConfigArray}
    sidebar: 'auto',

    // 是否启用 编辑此页 链接
    editLink: false,

    // 编辑此页 链接的文字
    editLinkText: '编辑此页',
  }),

  markdown: {
    toc: {
      //目录的层次深度
      includeLevel: [1, 2, 3, 4],
    },
  },

  // 配置插件
  plugins: [
    // 搜索插件
    searchProPlugin({
      // 配置选项
      indexContent: true,
      autoSuggestions: true,
    }),
    // 代码复制插件
    copyCodePlugin({
      // 插件选项
    }),
  ],
})
