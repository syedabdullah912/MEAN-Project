const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database); 
//on connection
mongoose.connection.on('connected',() => {
    console.log('connected to database'+ config.database);
});
//on err
mongoose.connection.on('error',(err) => {
    console.log('Database error'+err);
});

const app = express();

const users = require('./routes/users');

// port
const port= 3000;

// cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);


//index routes
app.get('/',(req,res)=>{
    res.send('invalid-endpoint');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

//server
app.listen(port,()=>{
    console.log('server running on port '+port);
});

