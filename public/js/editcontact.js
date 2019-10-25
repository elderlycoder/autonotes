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