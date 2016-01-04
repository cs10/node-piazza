var User = require("./models/User");
var PiazzaRPC = require("./piazza/rpc");

module.exports = {
  // must login before accessing other api methods
  login: function(email, password) {
    var loginPromise = PiazzaRPC("user.login", {
      email: email,
      pass: password
    }).then(function(data) {
      var getUserPromise = PiazzaRPC("user.status", {});
      return getUserPromise;
    }).then(function(data) {
      return new User(data);
    });
    return loginPromise;
  }
};