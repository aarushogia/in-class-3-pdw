const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'home'));
app.use(express.static(__dirname+'/home'));
// Set the view engine to EJS
app.set('view engine', 'ejs');

// load static folder
app.use(express.static('public'));

// home page
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
