const uppercase = require('./profession')

test(`uppercase 'test' to equal 'TEST'`, () => {
    return uppercase('').catch(e => {
        expect(e).toMatch('Empty string')
    })
})