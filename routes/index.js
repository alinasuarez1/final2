let express = require("express");
let bodyParser = require('body-parser');
let router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.use(express.static('public'));

//MongoDB

let MongoClient = require('mongodb').MongoClient;

let connectionString = "mongodb+srv://project0:project0@cluster0.2a8yl.mongodb.net/chickaina?retryWrites=true&w=majority";

router.get('/orderconfirmation', (req, res) =>{
    res.sendFile(__dirname + "/orderconfirmation.html")
})

router.get('/messageconfirmation', (req, res) =>{
    res.sendFile(__dirname + "/messageconfirmation.html")
})

router.get('/order2', (req, res) =>{
    res.sendFile(__dirname + "/order2.html")
})

router.get('/messages', (req, res) =>{
    res.sendFile(__dirname + "/contact.html")
})

MongoClient.connect(connectionString, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.error(err)
        console.log('Connected to Database');
        let db = client.db("chickaina");
        let ordersCollection = db.collection("orders");
        router.post('/orders', (req, res) =>{
            ordersCollection.insertOne(req.body).then(result => {
                console.log(req.body);
                res.redirect("/orderconfirmation");                
            })
            .catch(error => console.error(error))
        })
    

    
    router.get('/myhiddenorders', (req, res) =>{
        db.collection("orders").find().toArray()
              .then(results=>{
                console.log(results)
                res.render('myhiddenorders.ejs', {orders: results})
        })
        .catch(error=>console.error(error))
    });
})

MongoClient.connect(connectionString, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.error(err)
        console.log('Connected to Database');
        let db = client.db("chickaina");

        let messagesCollection = db.collection("messages");
        router.post('/messages', (req, res) =>{
            messagesCollection.insertOne(req.body).then(result => {
                console.log(req.body);
                res.redirect("/messageconfirmation");                
            })
            .catch(error => console.error(error))
        });
})
module.exports = router;