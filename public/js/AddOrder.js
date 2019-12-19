document.querySelectorAll('.select-part').forEach(function (elem) {
   elem.addEventListener('click', addPart)
});


function addPart(event) {
   const partsPlace = document.querySelector('[data-partsplace]')
   let div = document.createElement('div')
   div.setAttribute("class", "form-row")
   let li = document.createElement('li')
   li.setAttribute("class", "part-item")
   li.innerHTML = partTemplate
      .replace('%PART_NAME%', event.target.textContent)
   div.append(li)
   partsPlace.append(div)
   const btn = li.querySelector('.part-delete')
   const parentBtn = btn.parentElement
   btn.addEventListener('click', function (event) {
      event.preventDefault();
      parentBtn.parentElement.removeChild(parentBtn);
   })

   const addOpt = li.querySelector('.add-option')
   addOpt.addEventListener('click', addOption)
}

function addOption(event) {
   const addUrlPlace = event.target
   const divElement = document.createElement('div')
   divElement.setAttribute("class", "form-row")
   divElement.innerHTML = optionTemplate
   addUrlPlace.insertAdjacentElement('beforebegin', divElement)
   const btn = divElement.querySelector('.option-delete')
   const parentBtn = btn.parentElement
   const parentLi = parentBtn.parentElement
   btn.addEventListener('click', function (event) {
      event.preventDefault();
      parentLi.parentElement.removeChild(parentLi);
   })
   getModalHint();
   Summ();
}


const partTemplate = `
   <input type="text" value="%PART_NAME%" name="partname">
   <select name="selectside"><option>Сторона</option><option value="Передн.">Передн.</option><option value="Задн.">Задн.</option><option value="Слева">Слева</option><option value="Справа">Справа</option><option value="Передн. слева">Передн. слева</option><option value="Передн. справа">Передн. справа</option><option value="Передн. слева и справа">Передн. слева и справа</option><option value="Задн. слева">Задн. слева</option><option value="Задн. справа">Задн. справа</option><option value="Задн. слева и справа">Задн. слева и справа</option></select>
   <select name="selectplace"><option>Расположение</option><option value="Сверху">Сверху</option><option value="Снизу">Снизу</option><option value="Внутри">Внутри</option><option value="Снаружи">Снаружи</option></select>
   <input type="number" name="countpart" value="1" id="pyat" class="dva" min="1" max="900" step="1">
   <button class="part-delete">Удалить</button>
   
      <ul class="list-option" >
      <a href="#" class="add-option" data-listoption" >Добавить вариант</a>
      </ul> 
      <hr>    
  
`
const optionTemplate = `
<li class="li-list-option">
<input type="text" placeholder="Номер" name="number" size="15">
<input type="text" placeholder="Производитель" name="manufacturer" size="15">
<input type="text" placeholder="Поставщик" name="provider" size="15">
<input type="number" placeholder="Закупка" name="purchaseprice" min="0" max="1000000" step="1">
<input type="text"  name="buy" size="8">
<input type="number" placeholder="Продажа" name="sellingprice" min="0" max="1000000" step="1">
<input type="text" name="sell" size="8">
<button type="button" class="option-delete">&times</button>

</li>
<div class="parent"><ul></ul></div>    
`
