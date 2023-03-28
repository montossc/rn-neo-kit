const typeMustHaveScope = ({ type, scope }) => {
  const focusedType = ['feat', 'change', 'fix', 'lib']

  if (focusedType.includes(type) && !scope) {
    return [false, `${type} commits must have a scope`]
  }

  return [true]
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'type-must-have-scope': typeMustHaveScope,
      },
    },
  ],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [2, 'always', ['build', 'chore', 'feat', 'change', 'fix', 'lib']],
    'type-must-have-scope': [2, 'always'],
  },
}
