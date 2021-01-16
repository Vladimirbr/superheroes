const dotenv = require("dotenv");

// ENV var config
dotenv.config();

module.exports = {
  server: {
    port: process.env.PORT ? process.env.PORT : "3000",
  },
};
