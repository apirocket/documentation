const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Apirocket Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
	logo: '/assets/img/logo-rounded.png',
    repo: 'https://github.com/apirocket/documentation',
    editLinks: true,
    docsDir: 'src',
    editLinkText: 'Edit this page on GitHub',
	lastUpdated: false,
    nav: [
      {
        text: 'Quickstart',
        link: '/guide/',
      },
      {
        text: 'GraphQL API',
        link: '/api/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Quickstart',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/api/': [
        {
          title: 'GraphQL API',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
