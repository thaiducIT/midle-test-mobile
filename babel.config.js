module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          '@component': './src/component',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@navigation':'./src/navigation',
          '@assets':'./assets',
          '@src':'./src'
        }
      }]
    ]
  };
};
