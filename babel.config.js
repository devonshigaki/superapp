module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@navigation': './src/navigation',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@context': './src/context',
            '@styles': './src/styles',
            '@graphql': './src/graphql',
          },
        },
      ],
    ],
  };
};
