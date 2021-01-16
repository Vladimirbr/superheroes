const axios = require("axios");

const superheroeConfig = require("../configs/config").superheroapi;

const getHearoeByName = async (name) => {
  try {
    const url = superheroeConfig.url + superheroeConfig.APIToken + "/search/" + name;
    console.log("Send to url", url);
    const response = await axios.get(url);

    console.error("axios", response.data);

    if (response.data.response !== "success") throw Error("Failed to get superheroe");

    if (!response.data.results || !response.data.results.length) throw Error("Heroe not found for name: " + name);

    return response.data.results;
  } catch (e) {
    console.error("axios", e);
    throw Error(e);
  }
};

module.exports.getHearoeByName = getHearoeByName;
