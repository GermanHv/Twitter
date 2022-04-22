const UserService = require("../../app/services/UserService");

describe("Sprint 2:Tests for UserService", ()=>{
    test("Requirimiento 1. Nuevo usuario con UserService", ()=>{
        const user = UserService.create(1,"GermanHv","German")
        expect(user.username).toBe("GermanHv")
        expect(user.name).toBe("German")
        expect(user.id).toBe(1)
        expect(user.bio).toBeDefined()
    })

    test("Requerimiento 2. Prueba de Unidad", ()=>{
        const user = UserService.create(1,"GermanHv","German")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("GermanHv")
        expect(userInfoInList[2]).toBe("German")
        expect(userInfoInList[3]).toBe("bio vacia")
    })

    test("Requerimiento 3. Update username", ()=>{
        const user2 = UserService.create(1,"GermanHv","German")
        UserService.updateUserUsername(user2,"Vortex")
        expect(user2.username).toBe("Vortex")
    })

    test("Requerimiento 4. Mostrar lista de usernames", ()=>{
        const user1 = UserService.create(1,"GermanHv1", "German")
        const user2 = UserService.create(2,"GermanHv2", "German")
        const user3 = UserService.create(3,"GermanHv3", "German")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("GermanHv1")
        expect(usernames).toContain("GermanHv2")
        expect(usernames).toContain("GermanHv3")
    })
})