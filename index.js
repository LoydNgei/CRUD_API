const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const UserRoute = require('./routes/User')



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/user',UserRoute)

// DB Connection
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});





app.get('/', (req, res) => {
    res.json({ "message": "Hello Crud Node Express"});
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});





