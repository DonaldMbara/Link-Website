const main= require('./main'); //this imports the file i want to test
test('adds 1 + 2 to equal 3', () => {
  expect(main(1, 2)).toBe(3);
});
