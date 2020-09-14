
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
  it('shows/hides error banner', function() {
  var ans = 'this is the answer';
  var q_id = 12;
  var user = ''
  question = require('./answers'); //this imports the file i want to test
  //question(ans, q_id)

});
});

describe('vals', function(){

const {obj2,obj3,obj4,obj5,obj6} = require('./answers');
let vals;
let sum_of_vals;
let pos_vals;
let neg_vals;

beforeAll(() => {
    bool = 1;
    pos_vals = [2, 1, 3];
    neg_vals = [-2, -1, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
})

test('the sum of vals should be 2', () => {
    expect(obj2.sum(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(obj3.positive(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(obj4.negative(vals)).toEqual(neg_vals);
});

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
