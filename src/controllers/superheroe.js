const getHearoeByName = require("../utils/sender").getHearoeByName;

async function findByName(name) {
  try {
    const heroes = await getHearoeByName(name);

    const dataToReturn = {
      name,
      id: heroes[0].id,
      powerstats: heroes[0].powerstats,
    };
    //save to store

    return dataToReturn;
  } catch (e) {
    throw Error(e);
  }
}

async function getPrevSearched() {}

module.exports.findByName = findByName;
module.exports.getPrevSearched = getPrevSearched;
