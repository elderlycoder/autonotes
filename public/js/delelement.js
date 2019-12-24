// удаление элементов в режиме редактирования заказа
const btnPartDel = document.querySelectorAll('.part-delete')
btnPartDel.forEach(function (item) {
   item.addEventListener('click', function (event) {
      const li = item.parentElement
      console.log(li)
      li.parentElement.removeChild(li);
   })
})
   
const btnOptionDel = document.querySelectorAll('.option-delete')
btnOptionDel.forEach(function (item) {
   item.addEventListener('click', function (event) {
      const li = item.parentElement
      console.log(li)
      li.parentElement.removeChild(li);
   })
   })