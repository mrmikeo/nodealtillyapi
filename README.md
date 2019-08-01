# Node Altilly API Helper

[![https://telegram.me/@MrMike_O](https://img.shields.io/badge/💬%20Telegram-MrMike__O-blue.svg)](https://telegram.me/@MrMike_O)


A Promised NodeJS Module for connecting with the Altilly Restful API


## Install via git
```
git clone https://github.com/altilly/nodealtillyapi
cd nodealtillyapi
npm install

node example.js
```

example.js:
```
const altillyApi = require("./lib/altillyApi");
const restapi = new altillyApi.default();


(async () => {
  
  var xx = await restapi.xxx();
  
  console.log("xx: " + xx);
  
})();
```

## Install via npm
```
npm install --save https://github.com/altilly/nodealtillyapi
```

```
const altillyApi = require("nodeAltillyApi");
const restapi = new altillyApi.default();


(async () => {
  
  var xxx = await qapi.xxx();
  
  console.log("xxx: " + xxx);
  
})();
```
