const user = require("./../models/user")

class UserService {
    static create(id, username,name){//Recibe solo los parametros de id, username y name
        return new user(id,username,name, "bio vacia")
    }
    static getInfo(user){ //Se utiliza para mostrar los valores en lista los valores del objeto
        return [user.id, user.username,user.name,user="bio vacia"]
        //    return Object.values(user)
    }
    static updateUserUsername(user, newUsername){//se actualiza el name con otro valor.
     return user.username= newUsername
    }
    static getAllUsernames ([user1,user2,user3]){
        return [user1.username,user2.username,user3.username]
        //    const usersUsernames = users.map( user => user.username)
        // return usersUsernames
    }
}

module.exports = UserService