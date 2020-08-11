const promisify = require('./users');
test('resolves promise if a result is returned', () => {
  const exec = jest.fn(cb => cb(null, 'foo'));
  return expect(promisify({exec})).resolves.toEqual('foo');
});
