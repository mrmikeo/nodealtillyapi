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
    
    altillyApi.prototype.getMarketOrders = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/order?symbol=' + symbol, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
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

    altillyApi.prototype.cancelAllOrders = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.delete(this.apiURL + '/order', {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.cancelAllMarketOrders = function (symbol)
    {

        return new Promise((resolve, reject) => {
            
            var body = {};
            body.symbol = symbol;
        
            request.delete(this.apiURL + '/order', {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getOrderById = function (clientOrderId)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/order/' + clientOrderId, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.cancelOrderById = function (clientOrderId)
    {

        return new Promise((resolve, reject) => {
        
            request.delete(this.apiURL + '/order/' + clientOrderId, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getTradingBalances = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/trading/balance', {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getTradingFee = function (symbol)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/trading/fee/' + symbol, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }    
    
    // Trading History
    
    altillyApi.prototype.getTradeHistory = function (symbol = null, sort = 'DESC', by = 'timestamp', from = null, till = null, limit = 100, offset = 0)
    {

        var querystring = "";
        
        if (symbol !== undefined && symbol != null) querystring += 'symbol=' + symbol + "&";
        if (sort !== undefined && sort != null) querystring += 'sort=' + sort + "&";
        if (by !== undefined && by != null) querystring += 'by=' + by + "&";
        if (from !== undefined && from != null) querystring += 'from=' + from + "&";
        if (till !== undefined && till != null) querystring += 'till=' + till + "&";
        if (limit !== undefined && limit != null) querystring += 'limit=' + limit + "&";
        if (offset !== undefined && offset != null) querystring += 'offset=' + offset + "&";

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/history/trades?' + querystring, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  

    altillyApi.prototype.getOrderHistory = function (symbol = null, historytype = 'filled', sort = 'DESC', by = 'timestamp', from = null, till = null, limit = 100, offset = 0, clientOrderId = null)
    {

        var querystring = "";
        
        if (symbol !== undefined && symbol != null) querystring += 'symbol=' + symbol + "&";
        if (sort !== undefined && sort != null) querystring += 'sort=' + sort + "&";
        if (by !== undefined && by != null) querystring += 'by=' + by + "&";
        if (from !== undefined && from != null) querystring += 'from=' + from + "&";
        if (till !== undefined && till != null) querystring += 'till=' + till + "&";
        if (limit !== undefined && limit != null) querystring += 'limit=' + limit + "&";
        if (offset !== undefined && offset != null) querystring += 'offset=' + offset + "&";
        if (clientOrderId !== undefined && clientOrderId != null) querystring += 'clientOrderId=' + clientOrderId + "&";
        if (historytype !== undefined && historytype != null) querystring += 'historytype=' + historytype + "&";
        
        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/history/trades?' + querystring, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  
    
    altillyApi.prototype.getTradesByClientOrderId = function (clientOrderId)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/history/trades/' + clientOrderId, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    } 
    
    // Account
    
    altillyApi.prototype.getAccountBalances = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/account/balance', {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }
    
    altillyApi.prototype.getTransactionHistory = function (currency = null, sort = 'DESC', by = 'timestamp', from = null, till = null, limit = 100, offset = 0)
    {

        var querystring = "";
        
        if (currency !== undefined && currency != null) querystring += 'currency=' + currency + "&";
        if (sort !== undefined && sort != null) querystring += 'sort=' + sort + "&";
        if (by !== undefined && by != null) querystring += 'by=' + by + "&";
        if (from !== undefined && from != null) querystring += 'from=' + from + "&";
        if (till !== undefined && till != null) querystring += 'till=' + till + "&";
        if (limit !== undefined && limit != null) querystring += 'limit=' + limit + "&";
        if (offset !== undefined && offset != null) querystring += 'offset=' + offset + "&";
        
        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/account/transactions?' + querystring, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  
    
    altillyApi.prototype.getTransactionByTransactionId = function (transactionid)
    {
        
        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/account/transactions/' + transactionid, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  
    
    altillyApi.prototype.accountWithdraw = function (currency = null, amount = 0, address = null, paymentId = null, includeFee = false, autoCommit = false)
    {
        
        return new Promise((resolve, reject) => {
            
            var body = {};
            if (currency !== undefined && currency != null) body.currency = currency;
            if (amount !== undefined && amount != null) body.amount = amount;
            if (address !== undefined && address != null) body.address = address;
            if (paymentId !== undefined && paymentId != null) body.paymentId = paymentId;
            if (includeFee !== undefined && includeFee != null) body.includeFee = includeFee;
            if (autoCommit !== undefined && autoCommit != null) body.autoCommit = autoCommit;
        
            request.post(this.apiURL + '/account/crypto/withdraw', {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  
    
    altillyApi.prototype.commitWithdraw = function (withdrawId = null, confirmCode = null)
    {
        
        return new Promise((resolve, reject) => {
            
            var body = {};
            if (confirmCode !== undefined && confirmCode != null) body.confirmCode = confirmCode;
        
            request.put(this.apiURL + '/account/crypto/withdraw/' + withdrawId, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  

    altillyApi.prototype.cancelWithdraw = function (withdrawId = null)
    {
        
        return new Promise((resolve, reject) => {
            
            request.delete(this.apiURL + '/account/crypto/withdraw/' + withdrawId, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  
    
    altillyApi.prototype.getDepositAddress = function (currency = null)
    {
        
        return new Promise((resolve, reject) => {
            
            request.get(this.apiURL + '/account/crypto/address/' + currency, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                
                resolve(body);
                                                        
            });
            
        });

    }  
    
    altillyApi.prototype.getNewDepositAddress = function (currency = null)
    {
        
        return new Promise((resolve, reject) => {
            
            request.post(this.apiURL + '/account/crypto/address/' + currency, {json:true, headers:{"Authorization" : this.auth}}, function (error, response, body)
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
