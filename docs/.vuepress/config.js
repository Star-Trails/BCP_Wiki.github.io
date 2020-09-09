module.exports = {
  title: 'BCP Server Wiki',
  description: 'A wiki for BCP server',
  head: [['link', { rel: 'icon', href: '/BCP.jpg'}]],
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank' },
  },
  themeConfig: {
    displayAllHeaders: true,
    logo: '/BCP.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
      { text: '联系', link: 'https://space.bilibili.com/386183752/' },
      { text: '成员申请', link: 'https://ks.wjx.top/jq/69910494.aspx' },
      { text: '赞助', link: 'https://afdian.net/@bcpsv' },
      { text: '直播间', link: 'https://live.bilibili.com/22312854' },
    ],
    sidebar: [
      ['/about/','关于'],
      ['/rule/','条规'],
      ['/Q&A/','Q&A'],
      ['/project/','工程项目'],
    ],
    lastUpdated: '上次更新于',
    smoothScroll: true,
  },
}