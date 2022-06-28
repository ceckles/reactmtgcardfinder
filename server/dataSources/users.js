import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Decks extends MongoDataSource {
  async getUsers() {
    return await this.model.find();
  }

  async getUser(id) {
    return await this.findOneById(id);
  }

  async createUser({ firstName }) {
    return await this.model.create({ firstName });
  }
}