const uppercase = require('./uppercase')

test(`uppercase 'test' to equal 'TEST'`, () => {
    return uppercase('').catch(e => {
        expect(e).toMatch('Empty string')
    })
})