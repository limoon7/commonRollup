module.exports = {
  extends: [
    'eslint-config-airbnb',
    'prettier'
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  globals: {
    $: false,
    jQuery: false,
    Highcharts: false,
    require: false
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    //'prettier/prettier': 'error', //被prettier标记的地方会抛出错误信息
    'semi': 0, //不强制使用分号
  },
  plugins: ['babel'],
}
