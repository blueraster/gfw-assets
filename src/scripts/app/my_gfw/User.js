window.GFW = window.GFW || {};
window.GFW.NavBar = window.GFW.NavBar || {};

(function(gfw, root) {

gfw.myGFW = gfw.myGFW || {};

var $ = root.GFW.$;

var User = gfw.myGFW.User = {
  isLoggedIn: function(options) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', gfw.Utils.getAPIHost() + '/user', true);
    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {
      var responseStatus = xhr.status;
      if (responseStatus !== 200) {
        options.failure();
      } else {
        options.success();
      }
    };
    xhr.send();
  }
};

})(window.GFW.NavBar, window);
