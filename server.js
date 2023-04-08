const host = 'ddactivity.com';
const express = require('express');
const { Router, urlencoded, json } = express
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const fs = require('fs');
const { createServer } = require('https');

createServer({
    key: fs.readFileSync(`C:/Certbot/live/${host}/privkey.pem`),
    cert: fs.readFileSync(`C:/Certbot/live/${host}/fullchain.pem`),
}, express()
    .use('/assets', express.static('./dist/assets'))
    .use('/nemo', Router()
        .get('/', (req, res) => res.sendFile(path.join(__dirname, `./dist/index.html`)))
        .get('*', (req, res) => res.redirect('/nemo')))
    .use(urlencoded({ extended: false }))
    .use(helmet()).disable('x-powered-by')
    .use(json()).use(cookieParser())

).listen(443, host, () => console.log('https://' + host))