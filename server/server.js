const {MongoClient, ObjectId} = require('mongodb');
const express = require('express');
const cors = require("cors");

const uri = "mongodb+srv://tappedin_user1:UGA8hacks1!@tappedin-db.qc1c7j6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.json());

client.connect();


 app.get("/get", async (req, res) => {
    const cursor = await client.db("tp_db").collection("posts").find({});
    const results = await cursor.toArray();
    res.send(results);
 })

 app.post("/post", async (req, res) => {
    const title = req.body.title;
    const capacity = req.body.capacity;
    const date = req.body.date;
    const time = req.body.time;
    const tags = req.body.tags;
    const address = req.body.address;
    const description = req.body.description;
    const event = req.body.event;
    const user_id = req.body.user_id;
   //  const username = req.body.username;
   //  const result = await client.db("tp_db").collection("profiles").findOne({username: username});
   //  console.log(result._id);
    const newPost = {
        title: title,
        capacity: capacity,
        data: date,
        time: time,
        tags: tags,
        address: address,
        description: description,
        event: event,
        user_id: new ObjectId(user_id),
    };
    result = await client.db("tp_db").collection("posts").insertOne(newPost);
    res.send("yay");
 })

 app.get("/getprofile", async (req, res) => {
    const user_id = req.query.user_id;
    const result = await client.db("tp_db").collection("profiles").findOne({_id : new ObjectId(user_id)});
    console.log(result);
    res.send(result);
 })

app.listen(3001, () => {
    console.log('Server start at ${3001}')
})



