const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();
require('dotenv').config();

let db,
    dbConnectionString = process.env.DB_STRING
    dbName = 'raccoonapi',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('raccoonImages')
    })