module.exports = {
  root: true,
  extends: ['@antfu'],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
}
