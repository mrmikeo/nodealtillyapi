# Node HitBTC API Helper

[![https://telegram.me/@MrMike_O](https://img.shields.io/badge/💬%20Telegram-MrMike__O-blue.svg)](https://telegram.me/@MrMike_O)


A Promised NodeJS Module for connecting with the HitBTC Restful API (v2)


## Install via git
```
git clone https://github.com/mrmikeo/nodehitbtcapi
cd nodehitbtcapi
npm install

node example.js
```

example.js:
```
const hitbtcApi = require("./lib/hitbtcApi");
const restapi = new hitbtcApi.default();


(async () => {
  
  var xx = await restapi.xxx();
  
  console.log("xx: " + xx);
  
})();
```

## Install via npm
```
npm install --save https://github.com/mrmikeo/nodehitbtcapi
```

```
const htbtcApi = require("nodeHitbtcApi");
const restapi = new hitbtcApi.default();


(async () => {
  
  var xxx = await qapi.xxx();
  
  console.log("xxx: " + xxx);
  
})();
```
