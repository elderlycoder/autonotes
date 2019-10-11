let inputSearchContact = document.querySelector('#search-contact'), // получаем input при клике на который - окно с фильтрацией существующих заказов
    popupClose = document.querySelectorAll('.close'); // крестик закрытия окна
//TODO - сделать рефакторинг
//Поиск и получение существующего контакта
inputSearchContact.addEventListener('click', function () {
    document.querySelector('#popup-search-contact').classList.remove('hide-popup');
});

const result = document.getElementById('results');
const table = document.querySelector('#table-contact') // получаем таблицу с контактами
let l = document.querySelectorAll('.contacts-list')
let list = []
for (var i = 0; i < l.length; i++) {
    list.push(l[i].innerHTML);
}
document.querySelectorAll('#name-search').forEach(function(elem){
   elem.addEventListener('input', e => {
        renderList(filter(e.target.value, list), result);
        document.querySelector('.row-list').classList.add('hide');
    })
})

document.querySelectorAll('.items-search').forEach(function(elem){
    elem.addEventListener('click', getContact)
});
function filter(val, _list) {
    return _list.filter(it => it.toLowerCase().indexOf(val.toLowerCase()) !== -1)
}

function renderList(_list = [], el = document.body) {
    el.innerHTML = _list.map(item => `<li>${item}</li>`).join('');
}

function getContact(event){
    let target = event.target; // получаем элемент на котором произошло событие
    const parent = target.parentElement
    //inputSearchContact.setAttribute('value', target.parentElement.textContent);
    inputSearchContact.textContent = target.parentElement.textContent;
    document.querySelector('#popup-search-contact').classList.add('hide-popup');
   // document.querySelector('.contact-data').classList.remove('hide');
    document.querySelector('input[name="name"]').setAttribute('value', parent.children[0].textContent);
    document.querySelector('input[name="phone"]').setAttribute('value', parent.children[1].textContent);
    document.querySelector('input[name="model"]').setAttribute('value', parent.children[2].textContent);
}

const popupNewContact = document.querySelector('#open-popup-new-contact')
popupNewContact.addEventListener('click', function () {
    document.querySelector('#popup-new-contact').classList.remove('hide-popup');
});

document.querySelectorAll('.select-part').forEach(function(elem){
    elem.addEventListener('click', getPart)
});

function getPart(event){
    const partsList = document.querySelector('#parts-list')
    let target = event.target;
    let inputPartName = document.createElement('input');
    let inputCount = document.createElement('input');
    setAttributes(inputCount,{"type": "number", "value": "1", "id": "pyat"})
    inputPartName.setAttribute('value', target.textContent);
    partsList.appendChild(inputPartName);
    partsList.appendChild(inputCount);
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
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