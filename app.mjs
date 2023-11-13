import express from 'express'
const app = express();

import ejs from 'ejs'
import fs from 'fs'
const port = 8000;


import { hydrateDocument, renderToString } from './sdx/index.js';


/*console.log(

    renderToString("<my-element></my-element>", {
        prettyHtml: true
    }).then((x) => {
         console.log(x) // error because of flatpickr
    })

)*/


// app.use("/static", express.static('components'))


// Render index.ejs file
app.get('/', function (req, res) {

    // Render page using renderFile method
    ejs.renderFile('index.ejs', {},
        {}, async function (err, template) {
            if (err) {
                throw err;
            } else {


                const results = await renderToString(template, {
                    prettyHtml: true,
                    removeScripts: false
                });

                //console.log(template, results.html)

                res.end(results.html);
            }
        });
});

app.use('/sdx', express.static('sdx'))

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running on port ", port);
});
