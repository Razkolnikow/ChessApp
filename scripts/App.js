import {
  KinveyRequester
} from './KinveyRequester.js';

let App = (function () {
  function register(username, password) {
    function registerSuccess(userInfo) {
      saveAuthInSession(userInfo);
      showInfo("User registration successful.");
    }

    KinveyRequester.registerUser(username, password)
      .then(registerSuccess);
  }

  function login(username, password) {
    KinveyRequester.loginUser(username, password)
      .then(loginSuccess);

    function loginSuccess(userInfo) {
      saveAuthInSession(userInfo);
      showInfo('Login successfull!')
    }
  }

  function saveAuthInSession(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('userId', userInfo._id);
    sessionStorage.setItem('username', userInfo.username);
  }

  function logout() {
    sessionStorage.clear();
  }

  function showInfo(msg) {
    $('#infoBox').text(msg).show();
    setTimeout(function() {
      $('#infoBox').fadeOut(500);
    }, 3000);
  }

  function showError(errorMsg) {
    $('#errorBox').text('Error: ' + errorMsg).show();
    setTimeout(function() {
      $('#errorBox').hide(500);
    }, 5000);
  }

  return {
    register,
    login,
    logout
  }
})();

export { App };
