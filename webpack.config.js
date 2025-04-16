module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert/"),
      url: require.resolve("url/"),
    },
  },
};
