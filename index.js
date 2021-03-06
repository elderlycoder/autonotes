const express = require('express'); // подключаем модуль express
const mongoose = require('mongoose');
const config = require("config");

const app = express(); // создаем объект приложения
const routes = require('./routes/index');

const PORT = process.env.PORT || 5000;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});
const User = require('./model/user')
//const homeRoutes = require('./routes/home');
app.engine('hbs', hbs.engine); // регистрируем движок handlebars в express
app.set('view engine', 'hbs'); // указываем hbs в качестве шаблонизатора
app.set('views', 'views'); // явно указываем папку для Layouts
// пишем собственный midlleware, хотим чтобы у объекта req всегда присутствовал пользователь находящийся в системе
app.use(async (req, res, next) => {
   try {
      const user = await User.findById('5dc1f466a676b10a34ae3938'); // получаем пользователя из БД
      req.user = user; // добавляем пользователя в объект req
      next();
   } catch (e) {
      console.log(e);
   }

})
app.use(express.static('public'));

app.use('/', routes);

async function start(){
   try{
      console.log(config.dbUri)
   const url = config.dbUri;
      await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
      const candidate = await User.findOne(); // метод findone что-то вернет если в базе есть хотябы один пользователь
      if (!candidate) { // если в переменной candidate  ничего нет то создадим нового пользователя
         const user = new User({
            email: 'ryocka@gmail.com',
            name: 'Dmitriy',
            contactId: {}
           // contacts: {items: []}
         })
         await user.save();
      }

   app.listen(PORT, function () { // с помощью метода listen передаем номер порта на котором мы хотим слушать наше приложение app
      console.log(`Server is running on port: ${PORT}`);
   });
   } catch(e) {
      console.log(e)
   }
}
start();