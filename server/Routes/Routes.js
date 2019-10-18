const { hello } = require("../Controllers/chatController");

module.exports = app => {
  app.get("/api/hello", hello);
};
