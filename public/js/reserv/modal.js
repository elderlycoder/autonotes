let inputSearchContact = document.querySelector('#search-contact'), // получаем input при клике на который - окно с фильтрацией существующих заказов
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
(function() {document.querySelectorAll('.select-part').forEach(function (elem) {
    elem.addEventListener('click', addPart)
});
    // let arrayPart = document.querySelectorAll('input[name=partname]');
    // console.log(arrayPart)
}())
// добавление названия запчасти из меню справа

// let arrayPart = [];
// console.log(arrayPart)
 let count = 0; //?
function addPart(event) {
    const partsList = document.querySelector('#parts-list'); // получаем элемент список
    let listItem = createPartListItem(event.target)
    listItem.className = 'part-item';

    //let listOption = createPartListOptionUl();
    let listOption = createPartListOptionUl(count); //?
    let listHint = createHint();// создаем список с подсказками с названиями производителей
    let addVariant = createLinkDAddVariant();
    listOption.appendChild(listHint)
    listOption.appendChild(addVariant);
    listItem.appendChild(listOption);
    partsList.appendChild(listItem);
    getModalHint();
        // создание ссылки добавления запчасти
    function createLinkDAddVariant() {
        
        let add = document.createElement('a');
        add.innerText = "Добавить вариант";
        setAttributes(add, {
            "href": "#",
           // "data-num":`${count}`
        });
        add.addEventListener('click', function () {
            let num = this.dataset.num;
            let listOption = createPartListOptionLi(num);
            let listHint = createHint();// создаем список с подсказками с названиями производителей
            // let num = this.parentElement.dataset.num;
            // console.log(num)
            add.insertAdjacentElement('beforebegin', listOption);
            add.insertAdjacentElement('beforebegin', listHint);
            getModalHint();
        })
    return add;
    }
    count++; //?
}

// Создаем один элемент списка запчастей
function createPartListItem(title) {
    let inputPartName = document.createElement('input');
    inputPartName.setAttribute('value', title.textContent);
    inputPartName.setAttribute('size', 35);
    inputPartName.setAttribute('name', 'partname');
    inputPartName.setAttribute('name', ['partname' + count]); //?
    //inputPartName.innerHTML = title.textContent;

    let selectSide = document.createElement('select'); // 
    selectSide.setAttribute('name', 'selectside');
    selectSide.setAttribute('name', 'selectside' + [count]); //! 
    let array = ["Передн.", "Задн.", "Слева", "Справа", "Передн. слева", "Передн. справа", "Передн. слева и справа", "Задн. слева", "Задн. справа", "Задн. слева и справа"];
    let optionOne = document.createElement('option'); // первый option делаем отдельно без value
    optionOne.text = 'Сторона';
    selectSide.appendChild(optionOne);
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectSide.appendChild(option);
    }
    let selectPlace = document.createElement('select'); // 
    selectPlace.setAttribute('name', 'selectplace');
    selectPlace.setAttribute('name', 'selectplace' + [`${count}`]); //!
    let arrayPlace = ["Сверху", "Снизу", "Внутри", "Снаружи"];
    let optionPlace = document.createElement('option');
    optionPlace.text = 'Расположение';
    selectPlace.appendChild(optionPlace);
    for (let i = 0; i < arrayPlace.length; i++) {
        let option = document.createElement("option");
        option.value = arrayPlace[i];
        option.text = arrayPlace[i];
        selectPlace.appendChild(option);
    }
    let inputCount = document.createElement('input');
    setAttributes(inputCount, {
        "type": "number", "name": "countpart", "value": "1", "id": "pyat", "class": "dva"
    });

    const deleteButton = document.createElement('button'); // создаем кнопку "Удалить"
    deleteButton.innerText = 'Удалить';
    setAttributes(deleteButton, {
        "class": "delete-button"
    });
    deleteButton.addEventListener('click', function (event) { // удаление элемента при нажатии на кнопку
        listItem.parentElement.removeChild(listItem);
        event.preventDefault();
    })

    let listItem = document.createElement('li')
    listItem.appendChild(inputPartName);
    listItem.appendChild(selectSide);
    listItem.appendChild(selectPlace);
    listItem.appendChild(inputCount);
    listItem.appendChild(deleteButton);
    //arrayPart.push(inputPartName, selectSide);

    return listItem;
}

function createHint() {
    const listHint = document.createElement('div');
    listHint.setAttribute('class', "parent");
    const ul = document.createElement('ul');
    listHint.appendChild(ul)
    return listHint
}

// создаем вложенный список с вариантами запчастей
function createPartListOptionUl(i) {
    let listOption = document.createElement('ul');
    setAttributes(listOption, {
        "class": "list-option",
       // "data-num": `${count}`
    });
    
    let listOptionItem = createPartListOptionLi(i);
    listOption.appendChild(listOptionItem);
    
    return listOption;
}

function createPartListOptionLi(i) {
    
    let listOptionItem = document.createElement('li');
    setAttributes(listOptionItem, {
        "class": "li-list-option"
    });
    // let num = this.parentElement.dataset.num;
    // console.log(num)
    let inputManufacturer = document.createElement('input');
    setAttributes(inputManufacturer, {
        "type": "text",
        "placeholder": "Производитель",
        "name": "manufacturer"+[Number(i)],
        "data-rule": `${i}`
    });

    let inputPurchasePrice = document.createElement('input');
    setAttributes(inputPurchasePrice, {
        "type": "number",
        "placeholder": "Закупка",
        "name": `purchaseprice[${i}]`
    });
    let inputSellingPrice = document.createElement('input');
    setAttributes(inputSellingPrice, {
        "type": "number",
        "placeholder": "Продажа",
        "name": `sellingprice[${i}]`
    });

    const deleteButton = document.createElement('button'); // создаем кнопку "Удалить"
    deleteButton.innerText = 'Удалить';
    setAttributes(deleteButton, {
        "class": "delete-button"
    });
    deleteButton.addEventListener('click', function (event) { // удаление элемента при нажатии на кнопку
        listOptionItem.parentElement.removeChild(listOptionItem);
        event.preventDefault();
    })

    listOptionItem.appendChild(inputManufacturer);
    listOptionItem.appendChild(inputPurchasePrice);
    listOptionItem.appendChild(inputSellingPrice);
    listOptionItem.appendChild(deleteButton);
    return listOptionItem;

}

//добавление аттрибутов  к создаваемым элементам списка запчастей
function setAttributes(el, attrs) {
    for (var key in attrs) {
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