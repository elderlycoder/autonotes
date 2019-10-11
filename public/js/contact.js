const inputSelectModel = document.querySelector('#model'), // получаем input при клике на который - окно с фильтрацией существующих заказов
      carModel = document.querySelector('.row-modal-model');



inputSelectModel.addEventListener('click', function () {
    document.querySelector('#popup-model').classList.remove('hide-popup');
});


carModel.addEventListener('click', getContact)

function getContact(event){
    let target = event.target; // получаем элемент на котором произошло событие
    inputSelectModel.setAttribute('value', target.dataset.model);
    document.querySelector('#popup-model').classList.add('hide-popup');
   
}