const UserService = require("../../app/services/UserService");

describe("Sprint 2:Tests for UserService", ()=>{
    test("Requirimiento 1. Nuevo usuario con UserService", ()=>{
        const user = UserService.create(1,"GermanHv","German")
        expect(user.username).toBe("GermanHv")
        expect(user.name).toBe("German")
        expect(user.id).toBe(1)
        expect(user.bio).toBeDefined()
    })

})