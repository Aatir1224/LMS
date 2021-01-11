import mongoose from 'mongoose'
import colors from 'colors'

mongoose.connect('mongodb://localhost/LMS',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log(`Connected to Database :: MongoDB`.cyan.underline);
});


export default db;