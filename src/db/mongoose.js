//  /Users/kadir/mongodb/bin/mongod.exe --dbpath=/Users/kadir/mongodb-data

const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})