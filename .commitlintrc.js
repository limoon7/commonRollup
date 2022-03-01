// 参照 https://commitlint.js.org/#/reference-rules 进行自定义配置
// `type(scope?): subject` 注意冒号后面有空格。
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature)
        'fix', // 修复bug
        'upd', // 更新某功能
        'refactor', // 重构
        'docs', // 文档（documentation）
        'chore', // 构建过程或辅助工具的变动
        'style', // 格式（不影响代码运行的变动）
        'revert', // 撤销commit
        'perf', // 性能优化
        'test' // 测试（单元、集成测试）
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
