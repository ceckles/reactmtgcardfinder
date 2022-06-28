import 'dotenv/config'
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

import { Movie as MovieModel } from './models/movie';
import { Card as CardModel } from './models/card';
import { Deck as DeckModel } from './models/deck';
import { User as UserModel } from './models/user';

import Movies from './dataSources/movies';
import Cards from './dataSources/cards';
import Decks from './dataSources/decks';
import Users from './dataSources/users';

const uri = process.env.MONGODB_URI
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const dataSources = () => ({
  movies: new Movies(MovieModel),
  cards: new Cards(CardModel),
  decks: new Decks(DeckModel),
  users: new Users(UserModel),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});