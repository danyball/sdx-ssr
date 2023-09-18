// Requiring modules
const express = require('express');
const app = express();
const ejs = require('ejs');
var fs = require('fs');
const port = 8000;

const { hydrateDocument } = require('sdx/index.js');


// Render index.ejs file
app.get('/', function (req, res) {

    // Render page using renderFile method
    ejs.renderFile('index.ejs', {},
        {}, function (err, template) {
            if (err) {
                throw err;
            } else {
                res.end(template);
            }
        });
});

app.use(function (req, res, next) {
    console.log('Time: %d', Date.now())
    next()
})

// Server setup
app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running on port ", port);
});
