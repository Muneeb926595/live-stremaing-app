module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          app: './src',
          components: './src/components',
          styles: './src/styles',
          helpers: './src/helpers',
          screens: './src/screens',
          navigation: './src/navigation',
          models: './src/models',
          rawData: './src/data',
          hooks: './src/hooks',
          assets: './src/assets',
          utils: './src/utils',
          store: './src/store',
        },
      },
    ],
  ],
};