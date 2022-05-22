const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
const errorhandler = require("errorhandler");
const res = require('express/lib/response');
require('./database');

const app = express();
exports.app = app;

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./config/session.config');
require('./config/passport.config')

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === 'developement'){
    app.use(errorhandler())
} else {
    app.use((err, req , res , next ) => {
        const code = err.code || 500
        res.status(code).json({
            code : code,
            message : code === 500 ? null : err.message
        })
    })
}

app.listen(port);