module.exports = {
 
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,
    mode: 'development',
    devServer: {
        contentBase: 'dist',
        open: true
    },
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: 'main.js'
    },
  };
  