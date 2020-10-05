// 打印信息,运行状态

const info = (...params) => {
  console.log(...params)
}
const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info,
  error,
}
