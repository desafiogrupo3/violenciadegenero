const config = {
    appConfig: {
        port: process.env.PORT || 3000
    },
    dbConfig: {
        db: process.env.MONGO_DB,
    }
}

module.exports = config