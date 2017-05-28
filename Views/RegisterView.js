import jquery from 'jquery';

let register = function loadRegisterView() {
  let content = $('#content');
  content.empty();
  content.append(`<div>Register</div>`);
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
  submit.attr('value', 'Register');
  submit.attr('type', 'button');
  submit.attr('id', 'submit');

  content.append(labelUsername);
  content.append(inputUsername);
  content.append($('</br>'));
  content.append(labelPass);
  content.append(inputPass);
  content.append(submit);
}

export { register }
