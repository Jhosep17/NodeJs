const express = require('express');
const morgan = require('morgan');
const app = express();
//setting
app.set('port',process.env.PORT || 3000)
app.set('json spaces',2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routers
app.use('/api/users',require('./routers/index'));


app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
});