module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: [
    "feat",
    "fix",
    "test",
    "refactor",
    "chore",
    "docs",
    "style",
    "ci",
    "perf",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna",
  ],
  scopes: [],
  types: {
    chore: {
      description: "直接アプリの機能に関わらない変更(build系など)",
      emoji: "🤖",
      value: "chore",
    },
    ci: {
      description: "CIに関連する変更",
      emoji: "🎡",
      value: "ci",
    },
    docs: {
      description: "ドキュメントの変更",
      emoji: "📝",
      value: "docs",
    },
    feat: {
      description: "新機能の追加",
      emoji: "🎸",
      value: "feat",
    },
    fix: {
      description: "バグ修正",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "パフォーマンス改善",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "機能追加でもバグ修正でもないアプリのコード修正",
      emoji: "💡",
      value: "refactor",
    },
    style: {
      description: "コードのフォーマット修正",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "テストの追加",
      emoji: "💍",
      value: "test",
    },
  },
};
