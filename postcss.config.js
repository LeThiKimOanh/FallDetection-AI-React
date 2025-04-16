module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules\/lucide-react/,
      },
    ],
  },
};
