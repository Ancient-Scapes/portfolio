export default {
  language: {
    title: '言語',
    icon: 'text_format',
    item: {
      javaScript: {
        name: 'JavaScript',
        item: ['Vue.js', 'Nuxt.js', 'React.js', 'AngularJS', 'jQuery']
      },
      nodeJs: {
        name: 'Node.js'
      },
      css: {
        name: 'CSS'
      },
      sass: {
        name: 'Sass'
      },
      php: {
        name: 'PHP',
        item: ['FuelPHP', 'Laravel']
      },
      cSharp: {
        name: 'C Sharp',
        item: ['dotNET', 'Unity']
      },
      elixir: {
        name: 'Elixir',
        item: ['Phoenix']
      }
    }
  },
  javaScriptTools: {
    title: 'JavaScript周辺技術',
    icon: 'build',
    item: {
      build: {
        name: 'ビルドツール、タスクランナー',
        item: ['webpack', 'gulp', 'parcel', 'npm scripts']
      },
      test: {
        name: 'テスト',
        item: ['Jest', 'AVA']
      },
      formatter: {
        name: 'フォーマッター',
        item: ['ESLint', 'Prettier']
      }
    }
  },
  db: {
    title: 'データベース',
    icon: 'build',
    item: {
      rdbms: {
        name: 'RDBMS',
        item: ['MySQL', 'OracleDB', 'SQL Server']
      },
      nosql: {
        name: 'NoSQL',
        item: ['redis']
      }
    }
  },
  os: {
    title: 'OS',
    icon: 'build',
    item: {
      widnows: {
        name: 'Windows',
        item: ['Windows10']
      },
      mac: {
        name: 'Mac',
        item: ['Mac OSX']
      },
      linux: {
        name: 'Linux系',
        item: ['CentOS']
      }
    }
  },
  project: {
    title: 'プロジェクト管理',
    icon: 'build',
    item: {
      git: {
        name: 'git系',
        item: ['Github', 'GitLab']
      },
      task: {
        name: 'タスク管理',
        item: ['Redmione']
      }
    }
  },
  infra: {
    title: 'インフラ関係など',
    icon: 'build',
    item: {
      aws: {
        name: 'AWS',
        item: ['EC2']
      },
      firebase: {
        name: 'Firebase',
        item: ['Cloud Functions']
      },
      deploy: {
        name: 'デプロイ',
        item: ['Netlify']
      },
      docker: {
        name: 'docker',
        item: ['docker-compose']
      }
    }
  }
}
