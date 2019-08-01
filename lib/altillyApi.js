/*
* A Promised NodeJS Module for connecting with the Altilly Restful API
*/

const request = require("request");
const Big = require('big.js');

var altillyApi = /** @class */ (function () 
{

    function altillyApi(apiURL) 
    {
        if (apiURL === void 0)
            this.apiURL = 'https://qredit.cloud/api/v2';
        else
            this.apiURL = apiURL;
            
        return this;
    }
    
    altillyApi.prototype.getApiUrl = function ()
    {
    
        return this.apiURL;
    
    };
    
    

    
    return altillyApi;
    
}());

exports.default = altillyApi;
