module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.  
      'version': 'detect',
    }                     
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'import/export': 0
}
}
