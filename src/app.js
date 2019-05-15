
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

// session information
const session = require('express-session');
app.use(session({
    secret: 'keyboard secretive',
    resave: false,
    saveUninitialized: false,
    cookie: { expires: false }
}));

// require the db file
// require('./db');

// retrieving the model registered with mongoose
// const mongoose = require('mongoose');
// const Sound = mongoose.model('Sound');

// serve static files
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// change views directory
app.set('views', path.join(__dirname, 'views'));

// set up handlebars
app.set('view engine', 'hbs');

// parses the http req body and creates a prop on the req object called body
app.use(express.urlencoded({ extended: false }));

// route for the home page
app.get('/', (req, res) => {
    res.render('home-screen', {});
});

// route for the join page
app.get('/join', (req, res) => {
    res.render('join-screen', {});
});

// route for the create page
app.get('/create', (req, res) => {
    res.render('create-screen', {});
});

// first listen for connection using io.on
io.on('connection', socket => {
    console.log(socket.id, 'has connected!');    

    // then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
    
    socket.on('disconnect', () => {
        console.log(socket.id, 'good bye!');
    });
    
    socket.on('moveTop', data => {
        io.sockets.emit('moveTop', data);
    });

    socket.on('moveBottom', data => {
        io.sockets.emit('moveBottom', data);
    });

    socket.on('gameOver', data => {
        io.sockets.emit('gameOver', data);
        console.log(data);
    });

});

server.listen(3000);