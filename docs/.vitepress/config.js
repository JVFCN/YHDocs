import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "云湖开放文档",
    description: "面向所有云湖开发者的开放文档",
    head: [
        ['link', {
        rel: 'icon', href:'/yh.png'
        }]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/yh.png",
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Docs', link: '/ready/README'}
        ],

        search: {
            provider: 'local'
        },

        sidebar: [
            {
                text: '接入准备',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '开发须知', link: '/ready/README'},
                    {text: '服务端API列表', link: '/ready/ServerApiList'},
                    {text: '服务端错误代码', link: '/ready/ServerErrCode'},
                ]
            },
            {
                text: '消息管理',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '发送消息', link: '/msgManage/send'},
                    {text: '批量发送消息', link: '/msgManage/batchSend'},
                    {text: '编辑消息', link: '/msgManage/editMsg'},
                    {text: '设置看板', link: '/msgManage/setBoard'},
                    {text: '代码示例', link: '/msgManage/example'}
                ]
            },
            {
                text: '事件订阅',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '事件订阅详述', link: '/event/full'}
                ]
            },
            {
                text: 'SDK',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        collapsible: true,
                        collapsed: true,
                        text: '官方', items: [
                            {
                                text: 'Golang',
                                link: '/SDK/official/go'
                            },
                            {
                                text: 'Python',
                                link: '/SDK/official/python'
                            }
                        ]
                    },
                    {
                        collapsible: true,
                        collapsed: true,
                        text: '非官方', items: [
                            {
                                text: 'Python',
                                link: '/SDK/unOfficial/python'
                            },
                            {
                                text: 'Java',
                                link: '/SDK/unOfficial/java'
                            },
                            {
                                text: 'Dart',
                                link: '/SDK/unOfficial/dart'
                            },
                            {
                                text: 'NodeJS',
                                link: '/SDK/unOfficial/node'
                            },
                            {
                                text: 'Ruby',
                                link: '/SDK/unOfficial/ruby'
                            }
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/yhchat/'}
        ]
    }
})
