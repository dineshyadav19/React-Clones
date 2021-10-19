//importing
import express from "express"
import mongoose from "mongoose"
import Message from "./dbMessages.js"
import Pusher from 'pusher'
import cors from 'cors'

//configuration
const app = express()
const pusher = new Pusher({
    appId: "1121955",
    key: "8aaa18b05a7147099a5c",
    secret: "aee7572b9c8b855e6212",
    cluster: "ap2",
    useTLS: true
});

//middleware
app.use(express.json())
app.use(cors())

//DB config
const connection_url = 'mongodb+srv://admin:nabtau123@cluster0.3qy4k.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.once('open', () => {
    console.log("DB Connected");

    const msgCollection = db.collection("messagecontents")
    const changeStream  = msgCollection.watch()

    changeStream.on('change', (change) => {
        console.log(change)

        if(change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted', 
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Pusher')
        }
    })
})


//API routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

app.get('/messages/sync', (req, res) => {
    Message.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Message.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(9000, () => {
    console.log("Started!!!")    
})