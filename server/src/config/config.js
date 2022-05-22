export const PORT = 8080;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://monger:33Rrlpca!@!@@mtgdb.pb6hb.mongodb.net/mtgdb?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb://localhost:27017/graphqlTutorial-prod'
    }
}
