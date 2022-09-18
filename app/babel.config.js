module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
            '@hooks': './hooks',
            '@navigation': './navigation',
            '@screens': './screens',
            '@utils': './utils',
            '@themes': './themes'
          }
        }
      ]
    ]
  };
};
