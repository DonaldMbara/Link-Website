
//nonsense
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
    const question = require('./answers'); //this imports the file i want to test

     });
});

describe('User Model', function(){
  const {obj,obj2,obj3,obj4,obj5,obj6, obj7} = require('./answers');
  it('shows/hides error banner', function() {
  expect(obj.getAnswers(12)).toBe(1);
  expect(obj2.setUsername(12)).toBe(1);
  expect(obj3.like(1, 12)).toBe(1);
  expect(obj4.likeA(1, 12)).toBe(1);
});
});

describe('User Model', function(){
  const {obj,obj2,obj3,obj4,obj5,obj6,obj7} = require('./answers');
  it('shows/hides error banner', function() {
  expect(obj5.comment_upload('comment', 'MJ', 12)).toBe(1);
  expect(obj6.postAnswer('MJ', 12, 'ANSWER')).toBe(1);
  expect(obj7.showHide(12)).toBe(1);

});
});

describe('vals', function(){
const {obj,obj2,obj3,obj4,obj5,obj6,obj7} = require('./answers');
test('should get negative values', async () => {

  const somethingSpy = jest.spyOn(obj5, 'comment_upload').mockImplementation(()=>{
    const fakeResponse = {
     id: 12,
     name: "MJ",
     value: "THIS IS THE ANSWER"
  };
  return Promise.resolve(fakeResponse);
  });

  const some = await obj5.comment_upload('MJ', '12', 'THIS IS THE ANSWER');
  expect(some).toEqual({id: 12,
       name: "MJ",
       value: "THIS IS THE ANSWER"});

  expect(somethingSpy).toHaveBeenCalledTimes(1);
  expect(obj5.comment_upload).toHaveBeenCalledTimes(1);
});

test('should get negative values', async () => {

  const somethingSpy = jest.spyOn(obj6, 'postAnswer').mockImplementation(()=>{
    const fakeResponse = {
     id: 12,
     name: "MJ",
     value: "THIS IS THE ANSWER"
  };
  return Promise.resolve(fakeResponse);
  });

  const some = await obj6.postAnswer('MJ', '12', 'THIS IS THE ANSWER');
  expect(some).toEqual({id: 12,
       name: "MJ",
       value: "THIS IS THE ANSWER"});
});

});
