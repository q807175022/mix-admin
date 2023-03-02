module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat", // feat：新增功能
        "fix", // fix：bug 修复
        "perf", // perf：性能, 体验优化
        "style", // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
        "docs", // docs：文档更新
        "test", // test：新增测试用例或是更新现有测试
        "refactor", // refactor：重构代码(既没有新增功能，也没有修复 bug)
        "build", // build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        "ci", // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        "chore", // 不属于以上类型的其他类型，比如构建流程, 依赖管理
        "revert", // 回滚某个更早之前的提交
        "types" // TS类型方面的增改优化
      ]
    ]
  }
};
