jest
  .dontMock('fs')
  .dontMock('jquery');

var $ = require('jquery');
window.$ = $;
var fs = require('fs');
var jqueryT = fs.readFileSync('Link Website/js/sendMessages.js'); //this imports the file i want to test

describe('validateSubmits', function() {
  it('shows/hides error banner', function() {
     question = require('./sendMessages.js'); //this imports the file i want to test


});
});

describe('vals', function(){
const { sum1, positive1, negative1, search , clear, delete_q,s2,p2,n2,s3,p3,n3} = require('./sendMessages');
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
    expect(sum1(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(positive1(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(negative1(vals)).toEqual(neg_vals);
});

test('should get negative values', () => {
    expect(search("this hdggs")).toBe(1);
});

test('should get negative values', () => {
    expect(delete_q(11,12)).toBe(1);
});

test('should get negative values', () => {
    expect(clear(11,12)).toBe(1);
});

beforeAll(() => {

    pos_vals = [2, 1, 3];
    neg_vals = [-2, -1, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
})

test('the sum of vals should be 2', () => {
    expect(s2(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(p2(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(n2(vals)).toEqual(neg_vals);
});

beforeAll(() => {

    pos_vals = [2, 1, 3];
    neg_vals = [-2, -1, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
})

test('the sum of vals should be 2', () => {
    expect(s3(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(p3(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(n3(vals)).toEqual(neg_vals);
});
});
