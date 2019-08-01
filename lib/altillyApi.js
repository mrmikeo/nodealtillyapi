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
        
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
            
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
        
            request.get(this.apiURL + '/public/sumbol', {json:true}, function (error, response, body)
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
