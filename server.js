var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require("./webpack.config");
var express = require("express");
const path = require("path");

var app = express();
var port = 8080;

var compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: true
    },
    hot: true,
    inline: true
  })
);
app.use(webpackHotMiddleware(compiler));

app.use(express.static("dist"));

// example server side route
app.get("/auth/signup", (req, res) => {
  res.json({ user_id: "123" });
});

// default catch for all other routes
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(
      "Listening on port %s. Open up http://localhost:%s/ in your browser.",
      port,
      port
    );
  }
});
