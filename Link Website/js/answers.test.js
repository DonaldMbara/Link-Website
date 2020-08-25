jest
  .dontMock('fs')
  .dontMock('jquery');

  global.window = window
  global.$ = require('jquery');
  window.$ = $;
var fs = require('fs');

var html = fs.readFileSync('Link Website/html/answers.html','utf-8');
describe('validateSubmits', function() {
  it('shows/hides error banner', function() {

     question = require('./answers.js'); //this imports the file i want to test
     var jqueryT = fs.readFileSync('Link Website/js/answers.js'); //this imports the file i want to test
    const scriptEl = window.document.createElement('script');
    scriptEl.textContent = jqueryT;
    window.document.body.appendChild(scriptEl);
    jest.mock('./answers.js');

    $.ajax = jest.fn().mockImplementation(question => {
      let instance = {
        done: fn => {
          if (question.success) fn("test passed");
          return instance;
        },
        fail: fn => {
          if (!question.success) fn("test failed");
          return instance;
        }
      };
      return instance;
    });



});
});
