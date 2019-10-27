const express = require('express'); // подключаем модуль express
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const app = express(); // создаем объект приложения
const routes = require('./routes/index');
const PORT = process.env.PORT || 5000;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});
//const homeRoutes = require('./routes/home');
app.engine('hbs', hbs.engine); // регистрируем движок handlebars в express
app.set('view engine', 'hbs'); // указываем hbs в качестве движка 
app.set('views', 'views'); // явно указываем папку для Layouts
app.use(express.static('public'));

app.use('/', routes);

async function start(){
   try{
   const url = "mongodb://localhost:27017/test"
   await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
   app.listen(PORT, function () { // с помощью метода listen передаем номер порта на котором мы хотим слушать наше приложение app
      console.log(`Server is running on port: ${PORT}`);
   });
   } catch(e) {
      console.log(e)
   }
}
start();