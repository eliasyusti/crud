module.exports = {

    port: process.env.PORT || 3000,
    db:  process.env.MONGODB || 'mongodb://localhost/crud',
    SECRET_TOKEN: 'miclavetokens'

}