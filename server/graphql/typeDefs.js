import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  type Card {
    _id: ID!
    title: String!
    rating: Float!
    linkURL: String!
    imageURL: String!
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
  }
`;