const storage = require("node-persist");

const storeDir = require("../configs/config").store.dir;

async function initStore() {
  await storage.init({ dir: storeDir });
}

initStore();

const setToStorege = async (key, value) => {
  await storage.setItem(key, value);
};

const getFromStore = async (key) => {
  let value = await storage.getItem(key);
  return value;
};

module.exports.setToStorege = setToStorege;
module.exports.getFromStore = getFromStore;
