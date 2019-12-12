const inputSearchContact = document.querySelector('#search-contact'), // получаем input при клике на который - окно с фильтрацией существующих заказов
   popupClose = document.querySelectorAll('.close'); // крестик закрытия окна

//Поиск и получение существующего контакта
inputSearchContact.addEventListener('click', function () {
   document.querySelector('#popup-search-contact').classList.remove('hide-popup');
});

const result = document.getElementById('result');
let tr = document.querySelectorAll('#contact-tr');
let list = []
for (var i = 0; i < tr.length; i++) {
   list.push(tr[i].innerHTML);
}

document.querySelector('#name-search').addEventListener('input', e => {
   renderList(filter(e.target.value, list), result);
   document.querySelector('.row-list').classList.add('hide');
   result.classList.remove('hide')
})

function filter(val, _list) {
   return _list.filter(it => it.toLowerCase().indexOf(val.toLowerCase()) !== -1)
}

function renderList(_list = [], el = document.body) {
   el.innerHTML = '<tr><th>Имя</th><th>Телефон</th><th>Автомобиль</th><th>Год</th><th>Примечание</th></tr>' + _list.map(item => `<tr>${item}</tr>`).join('');
}

document.querySelectorAll('.items-search').forEach(function (elem) {
   elem.addEventListener('click', getContact)
});

function getContact(event) {
   let target = event.target; // получаем элемент на котором произошло событие
   const parent = target.parentElement,
      spanResult = document.querySelector('#contact-result');
   spanResult.textContent = "Имя: " + parent.children[0].textContent + "   Авто: " + parent.children[2].textContent + "     Тел: " + parent.children[1].textContent;
   document.querySelector('.contact-result').classList.remove('hide');
   document.querySelector('#popup-search-contact').classList.add('hide-popup');
   document.querySelector('input[name="id"]').setAttribute('value', target.dataset.id);
}
// окно добавления нового контакта
const popupNewContact = document.querySelector('#open-popup-new-contact')
popupNewContact.addEventListener('click', function () {
   document.querySelector('#popup-new-contact').classList.remove('hide-popup');
});
// выводим данные вновь добавленного контакта
const btnSaveNewContact = document.querySelector('#btn-save-new-contact');
btnSaveNewContact.addEventListener('click', getNewContact); // попробовать заменить на форму с событием 'submit'

function getNewContact(event) {
   const spanResult = document.querySelector('#contact-result');
   const formNewContact = document.querySelector('.form-new-contact');
   spanResult.textContent = document.querySelector('input[id=name]').value;
   document.querySelector('.contact-result').classList.remove('hide');
   document.querySelector('#popup-new-contact').classList.add('hide-popup');
   //event.preventDefault();

}
//выбираем марку и модель и вставляем в input
const carModel = document.querySelector('.row-modal-model'),
   inputSelectModel = document.querySelector('#model');
inputSelectModel.addEventListener('click', function () {
   document.querySelector('#popup-model').classList.remove('hide-popup');
});
carModel.addEventListener('click', getModel)

function getModel(event) {
   let target = event.target; // получаем элемент на котором произошло событие
   inputSelectModel.setAttribute('value', target.dataset.model);
   document.querySelector('#popup-model').classList.add('hide-popup');
}

popupClose.forEach(function (item) {
   item.addEventListener('click', function () {
      let popup = item.closest('.popup');
      // popup.style.display = "none";
      popup.classList.add('hide-popup');
   });
});

// закрыть все модальные окна по нажатию Escape
document.onkeydown = function (event) { // событие onkeypress на функциональных клавишах не работает
   if (event.keyCode == 27) {
      document.querySelectorAll('.popup').forEach(function (element) {
         element.classList.add('hide-popup');
      });
   }
};
// закрыть модальное окно по клику мимо окна
window.onclick = function (e) {
   if (e.target.classList.contains('popup')) {
      e.target.classList.add('hide-popup');
   }
}
