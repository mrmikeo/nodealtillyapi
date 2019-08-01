/*
* A Promised NodeJS Module for connecting with the Altilly Restful API
*/

const request = require("request");
const Big = require('big.js');

var altillyApi = /** @class */ (function () 
{

    function altillyApi(apiKey = null, apiSecret = null, apiURL) 
    {
        if (apiURL === void 0)
            this.apiURL = 'https://api.altilly.com/api';
        else
            this.apiURL = apiURL;
        
        this.auth = "Basic " + new Buffer(apiKey + ":" + apiSecret).toString("base64");
            
        return this;
    }
    
    altillyApi.prototype.getApiUrl = function ()
    {
    
        return this.apiURL;
    
    };
    
    ////
    //  Public  (Key & Secret Not Required)
    
    altillyApi.prototype.getSymbols = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/symbol', {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getSymbol = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/symbol/' + symbol, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getCurrencies = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/currency', {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getCurrency = function (currency)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/currency/' + currency, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getAddressInfo = function (address)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/address/' + address, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getTickers = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/ticker', {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getTicker = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/ticker/' + symbol, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getSimpleTrades = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/simpletrades/' + symbol, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getTrades = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/trades/' + symbol, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getOrderBook = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/orderbook/' + symbol, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }

    altillyApi.prototype.getSimpleOrders = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/simpleorders/' + symbol, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }

    altillyApi.prototype.getCandles = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/public/candles/' + symbol, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    ////
    //  Private API  (apiKey & apiSecret are REQUIRED)
    
    // Trading
    
    altillyApi.prototype.getOrders = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/order', {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.createOrder = function (clientOrderId = null, symbol = null, side = 'buy', type = 'limit', timeInForce = 'GTC', quantity = null, price = null, stopPrice = null, tpPrice = null, expireTime = null, strictValidate = false)
    {

        var body = {};
        
        body.clientOrderId = clientOrderId;
        body.symbol = symbol;
        body.side = side;
        body.type = type;
        body.timeInForce = timeInForce;
        body.quantity = quantity;
        body.price = price;
        body.stopPrice = stopPrice;
        body.tpPrice = tpPrice;
        body.expireTime = expireTime;
        body.strictValidate = strictValidate;
        
        return new Promise((resolve, reject) => {
        
            request.post(this.apiURL + '/order', {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    return altillyApi;
    
}());

exports.default = altillyApi;
