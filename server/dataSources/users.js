import { MongoDataSource } from 'apollo-datasource-mongodb'
const bcrypt = require('bcrypt');
export default class Decks extends MongoDataSource {
  async getUsers() {
    return await this.model.find();
  }

  async getUser(id) {
    return await this.findOneById(id);
  }

  async createUser({ firstName, lastName, userName, email, passWord }) {
    //encrypt password with bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(passWord, salt);
    const match = bcrypt.compareSync(passWord, hash);
    //console.log("Match: ", match);
    //ensure match
    if(match){
      //reassign password to hash
      passWord = hash;
    }else{
      return null;
    }
    //create user w/hashed pw
    return await this.model.create({ firstName, lastName, userName, email, passWord });
  }
}