/*
    Piazza-RPC
*/

var request = require("request");

var PIAZZA_API = "https://piazza.com/logic/api";
var cookieJar = request.jar();

function PiazzaRPC(method, params) {
    var requestParams;
    
    requestParams = {
        url: PIAZZA_API, 
        json: {
            method: method,
            params: params
        }, 
        jar: cookieJar
    };

    return new Promise(function(resolve, reject) {
        request.post(requestParams, function(error, response, body) {
            if (error) {
                return reject(error);
            } else if (body.error) {
                return reject(body.error);
            }
            return resolve(body.result);
        });
    });
}

module.exports = PiazzaRPC;