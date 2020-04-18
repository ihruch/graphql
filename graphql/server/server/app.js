const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://igor:123@cluster0-omo0j.mongodb.net/graphql?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const PORT = 3005;

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));


const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
    err? console.error(error) : console.log('Server started')
})
