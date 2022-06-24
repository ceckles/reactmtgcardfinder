import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Decks extends MongoDataSource {
  async getDecks() {
    return await this.model.find();
  }

  async getDeck(id) {
    return await this.findOneById(id);
  }

  async createDeck({ title, commander, cards}) {
    return await this.model.create({ title, commander, cards});
  }
}