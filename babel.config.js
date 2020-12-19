module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'IE >= 10'],
        },
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = ['react-hot-loader/babel', '@babel/plugin-transform-classes'];

  return { presets, plugins };
};
