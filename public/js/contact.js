const inputSelectModel = document.querySelector('#model'), // получаем input при клике на который - окно с фильтрацией существующих заказов
      carModel = document.querySelector('.row-modal-model');
let popupClose = document.querySelectorAll('.close'); // крестик закрытия окна

    inputSelectModel.addEventListener('click', function () {
    document.querySelector('#popup-model').classList.remove('hide-popup');
});
//выбираем марку и модель и вставляем в input
carModel.addEventListener('click', getContact)

function getContact(event){
    let target = event.target; // получаем элемент на котором произошло событие
    inputSelectModel.setAttribute('value', target.dataset.model);
    document.querySelector('#popup-model').classList.add('hide-popup');
}

const result = document.getElementById('result');
let tr = document.querySelectorAll('#contact-tr');
let list = []
    for (var i = 0; i < tr.length; i++) {
    list.push(tr[i].innerHTML);
    }
    console.log(list)
document.querySelector('#name-search').addEventListener('input', e => {
    //renderList(filter(e.target.value, list), result);
   renderList(filter(e.target.value, list), result);
    document.querySelector('.row-list').classList.add('hide');
    result.classList.remove('hide')
    })

function filter(val, _list) {
    return _list.filter(it => it.toLowerCase().indexOf(val.toLowerCase()) !== -1)
}

function renderList(_list = [], el) {
    el.innerHTML = '<tr><th>Имя</th><th>Телефон</th><th>Автомобиль</th><th>Год</th><th>VIN</th><th>Примечание</th></tr>' +_list.map(item => `<tr>${item}</tr>`).join('');
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