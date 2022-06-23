const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();
require('dotenv').config();

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'raccoonapi',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('raccoonImages')
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/*-----------------------------------------------

Cool stuff goes here (raccoons(raccoons go here))

-----------------------------------------------*/

app.listen(process.env.PORT || PORT, () => {
    console.log('it do be raccooning time :0')
})