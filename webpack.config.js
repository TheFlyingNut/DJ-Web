module.exports = {
    // other webpack configurations...
    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    // Set sourceType to module
    parserOptions: {
      sourceType: 'modlue',
    },
  };
  