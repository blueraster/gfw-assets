window.GFW = window.GFW || {};
window.GFW.NavBar = window.GFW.NavBar || {};

(function(gfw) {

gfw.myGFW = gfw.myGFW || {};

var User = gfw.myGFW.User = {
  isLoggedIn: function(options) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/user', true);
    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {
      var responseStatus = xhr.status;
      if (responseStatus === 401) {
        options.failure();
      } else {
        options.success();
      }
    };
    xhr.send();
  }
};

})(window.GFW.NavBar);