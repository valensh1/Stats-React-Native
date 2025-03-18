module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env', // Module name to import
          path: '.env', // Path to the .env file
        },
      ],
    ],
  };
};
