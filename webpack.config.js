// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do seu aplicativo
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Caminho para a saída do arquivo
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Expressão regular para arquivos JavaScript
        exclude: /node_modules/, // Não processar arquivos dentro de node_modules
        use: {
          loader: 'babel-loader', // Use o babel-loader para transpilação de código
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist', // Diretório de conteúdo do servidor de desenvolvimento
  },
};
