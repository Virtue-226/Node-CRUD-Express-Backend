//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

  //details from the env
const username = process.env.username
const password = process.env.password
// console.log(process.env.username, "username");
// console.log(password, "password")

const dbName = 'Node-API'

//connection string to mongo atlas ${username}:${password}
// mongodb+srv://admin:<password>@nodeapi.gzw1rta.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://admin:virtue226@nodeapi.gzw1rta.mongodb.net/Node-API?retryWrites=true&w=majority
const connectionString = `mongodb+srv://${username}:${password}@nodeapi.gzw1rta.mongodb.net/${dbName}?retryWrites=true&w=majority`

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

  mongoose.set("strictQuery", false);

//db connection
export const db = mongoose.connect(connectionString, options)
.then(res => {
    if(res){
        console.log(`Database connection succeffully to ${dbName}`)
    }
    
}).catch(err => {
    console.log(err, "errorMe")
})

