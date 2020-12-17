module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      { targets: { ie: '11' }, useBuiltIns: 'entry', corejs: '3' },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = ['react-hot-loader/babel'];

  return { presets, plugins };
};
