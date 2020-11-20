
//nonsense
    jest
        .dontMock('fs')
        .dontMock('jquery');

var b;
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
    const {obj,obj2,obj3,obj4,obj5,obj6, obj7,obj8,obj9,obj10} = require('./answers');
    it('shows/hides error banner', function() {
        expect(obj.getAnswers(12)).toBe(1);
        expect(obj2.setUsername(12)).toBe(1);
        expect(obj3.like(1, 12)).toBe(1);
        expect(obj4.likeA(1, 12)).toBe(1);
    });
});

describe('User Model', function(){
    const {obj,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10} = require('./answers');
    it('shows/hides error banner', function() {
        expect(obj5.comment_upload('comment', 'MJ', 12)).toBe(1);
        expect(obj6.postAnswer('MJ', 12, 'ANSWER')).toBe(1);
        expect(obj7.showHide(12,1)).toBe(1);

    });
});

describe('vals', function(){
    const {obj,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13} = require('./answers');
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