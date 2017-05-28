import $ from 'jquery';

let KinveyRequester = (function () {
  const baseUrl = 'https://baas.kinvey.com/';
  const appId = 'kid_HkdoKC4gW';
  const appSecret = '92cdc1de95f24e2e8a423755ec17a907';
  const appAuthHeaders = {
    Authorization: 'Basic ' + btoa(appId + ':' + appSecret)
  };

  function loginUser(username, password) {
    return $.ajax(
      {
        method: 'POST',
        url: baseUrl + 'user/' + appId + '/login',
        headers: appAuthHeaders,
        data: JSON.stringify({username, password}),
        contentType: 'application/json'
      }
    );
  }

  function registerUser(username, password) {
    return $.ajax(
      {
        method: 'POST',
        url: baseUrl + 'user/' + appId + '/',
        headers: appAuthHeaders,
        data: {username, password}
      }
    );
  }

  function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authtoken'),
        };
    }

    return {
      loginUser,
      registerUser,
    }
})();

export { KinveyRequester };
