export const resolvers = {
  Query: {
    getMovies: async (_, _args, { dataSources: { movies } }) => {
      return movies.getMovies();
    },
    getMovie: async (_, { id }, { dataSources: { movies } }) => {
      return movies.getMovie(id);
    },

    getCards: async (_, _args, { dataSources: { cards } }) => {
      return cards.getCards();
    },
    getCard: async (_, { id }, { dataSources: { cards } }) => {
      return cards.getCard(id);
    },
  },
  Mutation: {
    createMovie: async (_, args, { dataSources: { movies } }) => {
      return movies.createMovie(args)
    },
    createCard: async (_, args, { dataSources: { cards } }) => {
      return cards.createCard(args)
    },
  }
}