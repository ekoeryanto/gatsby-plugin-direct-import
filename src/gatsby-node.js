exports.modifyBabelrc = ({ babelrc }, { packages }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([`direct-import`, packages]),
  };
};
