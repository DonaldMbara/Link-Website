jest
  .dontMock('fs')
  .dontMock('jquery');

var $ = require('jquery');
var fs = require('fs');
fs.existsSync();
var html = fs.readFileSync('Link Website/html/register.html').toString();


describe('validateSubmits', function() {

  it('shows/hides error banner', function() {
    document.documentElement.innerHTML = html;


    $('#signup-form').submit();
    expect($('#error').hasClass('hidden')).toBe(false);

    $('#username').val('username');
    $('#first_name').val('joe');
    $('#last_name').val('doe');
    $('#email').val('joe@gmail.com');
    $('#signup_studentNo').val('12345678');
    $('#signup_password').val('numeric2');
    $('#signup-form').submit();

    });



  });
