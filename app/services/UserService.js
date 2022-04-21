const user = require("./../models/user")

class UserService {
    static create(id, username,name){
        return new user(id,username,name, "bio vacia")
    }
}

module.exports = UserService