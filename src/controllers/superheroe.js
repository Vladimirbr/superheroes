const getHearoeByName = require("../utils/sender").getHearoeByName;
const store = require("../store/store");
const storeKey = require("../configs/config").store.key;

async function findByName(name) {
  try {
    const heroes = await getHearoeByName(name);

    const dataToReturn = {
      name,
      id: heroes[0].id,
      powerstats: heroes[0].powerstats,
    };

    value = await store.getFromStore(storeKey);

    if (!value) {
      value = [name];
    } else {
      value.push(name);
    }

    await store.setToStorege(storeKey, value);

    return dataToReturn;
  } catch (e) {
    console.error(e);
    throw Error(e);
  }
}

async function getPrevSearched() {
  try {
    value = await store.getFromStore(storeKey);
    return value;
  } catch (e) {
    throw Error(e);
  }
}

module.exports.findByName = findByName;
module.exports.getPrevSearched = getPrevSearched;
