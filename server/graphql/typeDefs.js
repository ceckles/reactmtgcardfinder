import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  type User {
    _id: ID!
    firstName: String!
  }

  type Card {
    _id: ID!
    title: String!
    rating: Float!
    linkURL: String!
    imageURL: String!
  }

  type Deck {
    _id: ID!
    title: String!
  }

  type Query {
    getMovies: [Movie!]!
    getMovie(id: ID!): Movie!

    getCards: [Card!]!
    getCard(id: ID!): Card!

  }

  type Mutation {
    createMovie(title: String!, rating: Float!, year: Int!): Movie!
    createCard(title: String!, rating: Float!, linkURL: String!, imageURL:String!): Card!
    createDeck(title: String!): Deck!
    createUser(firstName: String!): User!
  }
`;