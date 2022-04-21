const user = require("./../models/user")

class UserService {
    static create(id, username,name){
        return new user(id,username,name, "bio vacia")
    }
    static getInfo(user){
        return [user.id, user.username,user.name,user="bio vacia"]
    }
}

module.exports = UserService