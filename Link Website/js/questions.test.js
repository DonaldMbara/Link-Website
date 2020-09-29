jest
  .dontMock('fs')
  .dontMock('jquery');

  global.window = window
  global.$ = require('jquery');
  window.$ = $;
var fs = require('fs');

var html = fs.readFileSync('Link Website/html/questions.html','utf-8');
describe('validateSubmits', function() {
  it('shows/hides error banner', function() {

     question = require('./questions.js'); //this imports the file i want to test
     var jqueryT = fs.readFileSync('Link Website/js/questions.js'); //this imports the file i want to test


});
});

describe('', function() {
  it('functions run', function() {

  const { sum, positive, negative, class1,class2,s1,p1,n1,s2,p2,n2} = require('./questions');
  expect(class1.questions(12)).toBe(1);
  expect(class2.search('inputVal',12)).toBe(1);
});
});

describe('vals', function(){
  const { sum, positive, negative, class1,class2,s1,p1,n1,s2,p2,n2} = require('./questions');
let vals;
let sum_of_vals;
let pos_vals;
let neg_vals;

beforeAll(() => {
    pos_vals = [2, 1, 3];
    neg_vals = [-2, -1, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
})

test('the sum of vals should be 2', () => {
    expect(sum(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(positive(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(negative(vals)).toEqual(neg_vals);
});

test('should get negative values', () => {
    expect(n1(vals)).toEqual(neg_vals);
});

test('should get positive values', () => {
    expect(p1(vals)).toEqual(pos_vals);
});

test('the sum of vals should be 2', () => {
    expect(s1(vals)).toBe(sum_of_vals);
});

test('should get negative values', () => {
    expect(n2(vals)).toEqual(neg_vals);
});

test('should get positive values', () => {
    expect(p2(vals)).toEqual(pos_vals);
});

test('the sum of vals should be 2', () => {
    expect(s2(vals)).toBe(sum_of_vals);
});
});
