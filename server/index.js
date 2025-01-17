const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const connectDB = require('./config/db.js');

console.log('env variable port:', process.env.PORT);
const port = process.env.PORT || 5000;
const app = express();

//connect DB
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));
app.listen(port, console.log(`Server running on port ${port}`));