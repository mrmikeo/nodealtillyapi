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
 - or -
const restapi = new altillyApi.default('key', 'secret');

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
 - or -
const restapi = new altillyApi.default('key', 'secret');

(async () => {
  
  var xxx = await restapi.xxx();
  
  console.log("xxx: " + xxx);
  
})();
```

## Methods / Public
# getApiUrl() : Returns current api server url
# getSymbols() : Get a list of all markets
# getSymbol('ETHBTC') : Get information on a specific market
# getCurrencies() : Get a list of all currencies
# getCurrency('ETH') : Get information on a single currency
# getAddressInfo('xxxxx') : Get information about an address
# getTickers() : Get all current ticker information
# getTicker('ETHBTC') : Get ticker for specific market
# getSimpleTrades('ETHBTC') : Get a simple trades report for market
# getTrades('ETHBTC') : Get an expanded trade report for market
# getOrderBook('ETHBTC') : Get orderbooks for market
# getSimpleOrders('ETHBTC') : Alternate simple orderbooks for market
# getCandles('ETHBTC') : Get candlestick information for market

## Methods / Private
# getOrders() : Get your current open orders
# getMarketOrders('ETHBTC') : Get your current open orders in a specific market
# createOrder(clientOrderId = null, symbol = null, side = 'buy', type = 'limit', timeInForce = 'GTC', quantity = null, price = null, stopPrice = null, tpPrice = null, expireTime = null, strictValidate = false) : Create new order
