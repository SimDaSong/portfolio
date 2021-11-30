import path from 'path'

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),  // ./ 경로를 @으로 설정
      extensions: ['.ts', '.tsx', '.js', '.json'],
    }
  },
}