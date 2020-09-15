const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry y Output de la App
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  //Resuelve las extensiones que vamos a usar (les das soporte)
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Modulo con las reglas para empaquetar nuestro proyecto
  module: {
    rules: [
      /* En estas reglas configuramos los loader, que van a procesar y las extensiones que van a recibir
       y necesitan procesar */
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        /* en 'use' si solo ponemos un loader podemos poner el objeto directo, si necesitamos más de un loader
        pones un array y dentro la cantidad de objetos necesitarios*/
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        //Extensiones que vamos a usar para manejo de imagenes
        test: /\.(png|gif|jpe?g)/,
        use: [
          {
            loader: 'file-loader',
            //Como se va a llamar nuestro archivo después de pasar por webpack
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  // Configuramos los plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
};
