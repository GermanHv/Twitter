const UserView = require ('./../../app/views/UserView.js')

describe("Sprint 3: Tests for UserView", ()=>{
    test("1. Requerimiento: Return an error object when try to create a new user with an null payload",()=>{
        const payload =null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })
})

