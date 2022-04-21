
const User = require('./../../app/models/user')

describe("Pruebas Twitter", () => {
    test("Requirimiento 1: Creaccion de la clase",()=>{

        const German = new User(1, "GermanHv", "German","Hello",)
        expect(German.id).toBe(1)
        expect(German.username).toBe('GermanHv')
        expect(German.bio).toBe('Hello')
        expect(German.dateCreated).toBeDefined
        expect(German.lastUpdated).toBeDefined
    })

    test("Requirimiento 2: Fechas en atributos de User",()=> {
        const Carlo = new User(1, "carlogilmar","carlo", "Bio")
        expect(Carlo.dateCreated).not.toBeUndefined()
        expect(Carlo.lastUpdated).not.toBeUndefined()
    })


})