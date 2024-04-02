const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Couple = require('./models/couple.model')
const CouplesRoute = require('./routes/couple.route')
const app = express()
const PORT = 3000;
const HOST_NAME = "localhost";

//MIDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//ROUTES
app.use('/api/couples', CouplesRoute);



//DB Connection
mongoose.connect("mongodb+srv://therapyadmin:BjJJix72IBbwjxVG@capetowncluster.nrymhrp.mongodb.net/Therapy-API?retryWrites=true&w=majority&appName=CapeTownCluster")
    .then(() => {
        console.log("Connected Succesfully");

        app.listen(3000, () => {
            console.log("SERVER IS RUNNING ON PORT: 3000")
        });

    })
    .catch(() => {
        console.log("Failed to connect");
    });

