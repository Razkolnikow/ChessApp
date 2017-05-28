import jquery from 'jquery';

function login () {
  $('#content').empty();
  $('#content').append(`<div>Login</div>`);
  let content = $('#content');

  let labelUsername = $(`<span>Username</span>`);
  labelUsername.addClass('label');
  let inputUsername = $('<input>');
  inputUsername.addClass('textBox')
  inputUsername.attr('id', 'username');

  let labelPass = $('<span>Password</span>');
  labelPass.addClass('label');
  let inputPass = $('<input>');
  inputPass.attr('type', 'password');
  inputPass.attr('id', 'password');
  inputPass.addClass('textBox');

  let submit = $('<input>');
  submit.attr('value', 'Login');
  submit.attr('type', 'button');
  submit.attr('id', 'login');

  content.append(labelUsername);
  content.append(inputUsername);
  content.append($('</br>'));
  content.append(labelPass);
  content.append(inputPass);
  content.append(submit);
}

export {
  login
};
