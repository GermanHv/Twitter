class User {
    constructor(id, username, name, bio , dateCreated, lastUpdated){
    this.id = id
    this.username = username
    this.bio= bio
    this.name=name
    this.dateCreated= new Date() //sintaxis de js, es una funcion
    this.lastUpdated= new Date()
    }

    // getters
    get getUsername(){// esto es una convencion en comun por POO, y da una mejor estructura en archivos y logica
        return this.username
    }

    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }

    //setters
    set setUsername(newUsername){
        this.username = newUsername
    }

    set setBio(newBio){
        this.bio = newBio
    }

}

module.exports = User