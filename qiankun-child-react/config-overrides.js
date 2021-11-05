module.exports = {
  webpack: function override(config, env) {
    config.output.publicPath = env.NODE_ENV === 'production' ? '/child-react' : '/';
    config.output.library = `qiankun-child-react`;
    config.output.libraryTarget = 'umd';
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    };
  },
};