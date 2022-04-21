class User {
    constructor(id, username, name, bio , dateCreated, lastUpdated){
    this.id = id
    this.username = username
    this.bio= bio
    this.name=name
    this.dateCreated= new Date() //sintaxis de js, es una funcion
    this.lastUpdated= new Date()

    }
}

module.exports = User