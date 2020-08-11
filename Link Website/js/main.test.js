const {login, active} = require('./main'); //this imports the file i want to test
describe('testing string utilities', () => {
    test.each(["racecar", "radar", "level", "refer", "deified", "civic"])(
        'testing %s for palindrome', (word) => {
            expect(login(word)).toBeTruthy();
        },
    );

    test.each([["arc", "car"], ["cat", "act"], ["cider", "cried"]])(
        'testing if %s and %s are anagrams ', (word1, word2) => {
            expect(active(word1, word2)).toBeTruthy();
        },
    );
});
