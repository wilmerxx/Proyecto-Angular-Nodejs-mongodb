
const cors = require('cors')
const express = require('express');
const app = express();
//para html
//const path = require('path');

//const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

//configurar
//para el html
//app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//router
//app.use(indexRoutes);
app.use('/api',tasksRoutes);

//para el hmtl
//app.use(express.static(path.join(__dirname, 'dist')));


app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
});


