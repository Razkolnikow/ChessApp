import 'jquery';
import { register } from './Views/RegisterView.js';
import { login } from './Views/LoginView.js';
import { App } from './scripts/App.js';
import { chessBoard } from './Views/ChessBoardView.js';

function executeRegister(sammy) {
  $('#submit').on('click', function executeRegister() {
    let username = $('#username').val();
    let password = $('#password').val();
    App.register(username, password);

    // TODO redirect must be fixed
    //$(document).ajaxStop(samm.redirect('#/'))

    setTimeout(function () {sammy.redirect('#/')}, 3500);
  });
}

function executeLogin(sammy) {
  $('#login').on('click', function () {
    let username = $('#username').val();
    let password = $('#password').val();
    App.login(username, password);

    setTimeout(function () {sammy.redirect('#/')}, 3500);
  });
}

var sammyApp = Sammy('#content', function () {
  this.get('#/', function () {
    $('#content').empty();
    $('#content').text('Home')

    // Getting query params
    //console.log(this.params.page);
  });

  this.get('#/details', function () {
    $('#content').empty();
    $('#content').text('Details')
  });

  this.get('#/register', function () {
    $('#content').empty();
    register();
    executeRegister(this);
  });

  this.get('#/login', function () {
    $('#content').empty();
    login();
    executeLogin(this);
  });

  this.get('#/login', function () {
    $('#content').empty();
    App.logout();
    this.redirect('#/');
  });

  this.get('#/play', function () {
    $('#content').empty();
    chessBoard();
  })
});

sammyApp.run('#/')

$(document).on({
      ajaxStart: function() { $("#loadingBox").show() },
      ajaxStop: function() { $('#loadingBox').hide() }
    });

$(document).ajaxError(
  handleAjaxError.bind(this));

  function handleAjaxError(event, response) {
    let errorMsg = JSON.stringify(response);

    showError(errorMsg);
  }

  function showError(errorMsg) {
    $('#errorBox').text('Error: ' + errorMsg).show();
    setTimeout(function() {
      $('#errorBox').hide(500);
    }, 5000);
  }
