import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Cards extends MongoDataSource {
  async getCards() {
    return await this.model.find();
  }

  async getCard(id) {
    return await this.findOneById(id);
  }

  async createCard({ title, rating, linkURL, imageURL }) {
    return await this.model.create({ title, rating, linkURL, imageURL });
  }
}