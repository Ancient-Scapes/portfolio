export default {
  language: {
    title: '言語',
    icon: 'text_format',
    item: {
      javaScript: {
        name: 'JavaScript',
        item: ['Vue.js', 'Nuxt.js']
      },
      nodeJs: {
        name: 'Node.js',
        item: ['yarn']
      },
      css: {
        name: 'CSS',
        item: ['Sass']
      },
      php: {
        name: 'PHP',
        item: ['FuelPHP', 'Laravel']
      },
      cSharp: {
        name: 'C#',
        item: ['.NET', 'Unity']
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
        icon: 'build',
        item: ['webpack', 'parcel', 'gulp', 'npm scripts', 'BABEL']
      },
      test: {
        name: 'テスト',
        icon: 'build',
        item: ['Jest', 'AVA']
      },
      formatter: {
        name: 'フォーマッター',
        icon: 'build',
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
        icon: 'build',
        item: ['MySQL', 'OracleDB', 'SQL Server']
      },
      nosql: {
        name: 'NoSQL',
        icon: 'build',
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
        name: 'Linux',
        item: ['CentOS']
      }
    }
  },
  project: {
    title: 'プロジェクト管理',
    icon: 'build',
    item: {
      git: {
        name: 'git',
        item: ['Github', 'GitLab']
      },
      task: {
        name: 'タスク管理',
        icon: 'assignment_turned_in',
        item: ['Redmine']
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
      docker: {
        name: 'docker',
        item: ['docker-compose']
      }
    }
  }
}
