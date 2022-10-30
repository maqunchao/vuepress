module.exports = {
    title: 'Mark的随记', //网站标题
    dest: './dist',
    port: '80',
    description: '简易网站', //网站描述
    head: [ //注入到当前HTMl页面 <head> 中的标签
        ['link', {
            rel: 'icon',
            href: '/logo.png' //图片应存放在public目录下
        }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: {
            '/js/': [{
                title: '常见问题（FAQ）',
                path: "/js/1001",
                collapsable: false,
                children: [
                    { title: '1001', path: '1001' },
                    { title: '箭头函数和普通函数的区别', path: '箭头函数和普通函数的区别' }
                ]
            }],

            '/css/': [{
                title: 'iOS',
                sidebarDepth: 2,
                collapsable: true,
            }],
            '/JavaScript/': [{
                title: '书籍',
                sidebarDepth: 2,
                collapsable: true,
            }]
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    // 插件，安装后才能使用 ，安装方法 yarn add -D 插件名称
    plugins: [
        '@vuepress/plugin-back-to-top', //返回顶部的插件
        '@vuepress/plugin-medium-zoom', //图片放大的插件
        [
            'one-click-copy',
            {
                copyMessage: '复制成功'
            }
        ],
        ['vuepress-plugin-code-copy', true] //一键复制的插件
    ]
}
