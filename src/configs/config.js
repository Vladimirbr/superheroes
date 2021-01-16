const dotenv = require("dotenv");

// ENV var config
dotenv.config();

module.exports = {
  server: {
    port: process.env.PORT ? process.env.PORT : "3000",
  },
  superheroapi: {
    APIToken: process.env.APIToken ? process.env.APIToken : 10158964287472463,
    url: "https://superheroapi.com/api/",
  },
};
//access-token/search/name
