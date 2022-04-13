const express = require('express');
const morgan = require('morgan');
const mainRoutes = require('./routes/mainRoutes');
const port = 3000;
const host = 'localhost';
const app = express();


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/',mainRoutes);

app.use((req, res, next)=>{
    let err = new Error('The server cannot locate' +req.url);
        err.status = 404;
        next(err);
});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    if (!err.status){
        err.status = 500;
        err.message = "Internal Server Error";
    }
 res.status(err.status);
 res.render('error', {error: err});
});

app.listen(port,host,()=>{
    console.log('Server is running at '+host+':'+port);
});