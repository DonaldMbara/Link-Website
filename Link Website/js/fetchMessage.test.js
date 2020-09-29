
jest
  .dontMock('fs')
  .dontMock('jquery');

var $ = require('jquery');
window.$ = $;

describe('vals', function(){
const { s1, p1, n1,obj8,obj9,obj10,obj11,obj12,obj13} = require('./fetchMessage');
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
    expect(s1(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(p1(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(n1(vals)).toEqual(neg_vals);
});

test('the sum of vals should be 2', () => {
    expect(obj8.s1(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(obj9.p1(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(obj10.n1(vals)).toEqual(neg_vals);
});
test('the sum of vals should be 2', () => {
    expect(obj11.s1(vals)).toBe(sum_of_vals);
});

test('should get positive values', () => {
    expect(obj12.p1(vals)).toEqual(pos_vals);
});

test('should get negative values', () => {
    expect(obj13.n1(vals)).toEqual(neg_vals);
});
});
