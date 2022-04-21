
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
        const Carlo = new User(2, "carlogilmar","carlo", "Bio")
        expect(Carlo.dateCreated).not.toBeUndefined()
        expect(Carlo.lastUpdated).not.toBeUndefined()
    })

    test("Requirimiento 3: anadiendo getters",()=> {
        const Paola = new User(3, "Paola","Pau", "Bio")
        expect(Paola.getUsername).toBe("Paola")
        expect(Paola.getBio).toBe("Bio")
        expect(Paola.getDateCreated).toBeDefined
        expect(Paola.getLastUpdated).toBeDefined
    })

    test("Requirimiento 4: anadiendo setters",()=> {
        const German = new User(1, "GermanHv", "German","Hello",)
        German.setUsername = "Vortex"
        German.setBio = "Hiii"
        //setters sirven para actualizar la info del objeto
        expect(German.username).toBe('Vortex')
        expect(German.bio).toBe('Hiii')
        
    })


})