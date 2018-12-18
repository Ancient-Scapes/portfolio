const now = new Date().getFullYear()
const birth = new Date('1995-12-04').getFullYear()
const age = (now - birth).toString()

export default {
  // eslint-disable-next-line
  info: [
    { caption: '名前', value: 'しゅけピー' },
    { caption: '年齢', value: `${age}歳` },
    { caption: '趣味', value: '音ゲー、ガンダム、スマブラ' }
  ],
  // eslint-disable-next-line
  links: [
    { title: 'Github', url: 'https://github.com/SugarShootingStar' },
    { title: 'Qiita', url: 'https://qiita.com/SugarShootingStar' },
    { title: 'Twitter', url: 'https://twitter.com/_Ancient_Scapes' }
  ],
  // eslint-disable-next-line
  talking: [
    {
      title: 'サポーターズColabL ビギナーズLT会 vol.1',
      url: 'https://supporterzcolab.com/event/567/'
    },
    {
      title: 'サポーターズColabL ビギナーズLT会 vol.2',
      url: 'https://supporterzcolab.com/event/590/'
    },
    {
      title: 'Node.jsでスクレイピングしてエモくなろう',
      url: 'https://supporterzcolab.com/event/587/'
    }
  ]
}
