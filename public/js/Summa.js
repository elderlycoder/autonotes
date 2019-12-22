function Summ() {
   document.querySelectorAll('.part-item').forEach(function (elem) {
      elem.addEventListener('input', function (event) {
         let quantity = elem.querySelector('input[name="countpart"]').value
         if (event.target.className == 'dva' || 'purchaseprice' || 'sellingprice') {
            const li = elem.querySelectorAll('.li-list-option')
            li.forEach(function (item) {
               let price = item.querySelector('input[name="purchaseprice"]').value
               let buySumm = item.querySelector('input[name="buy"]')
               buySumm.value = quantity * price
               let sell = item.querySelector('input[name="sellingprice"]').value
               let sellSumm = item.querySelector('input[name="sell"]')
               sellSumm.value = quantity * sell
            })
         }
      })
   });
}

const btnSumma = document.querySelector('button[name="btn-summa"]')
btnSumma.addEventListener('click', function () {
   const li = document.querySelectorAll('.li-list-option')
   let summaBuy = document.querySelector('.summabuy')
   summaBuy.value = 0
   let summaSell = document.querySelector('.summasell')
   summaSell.value = 0
   li.forEach(function (elem) {

      let checkBox = elem.querySelector('input[name="check"]')
      if (checkBox.checked) {
         let buy = elem.querySelector('input[name="buy"]').value
         let sell = elem.querySelector('input[name="sell"]').value
         console.log(sell)

         summaBuy.value = Number(summaBuy.value) + Number(buy)
         summaSell.value = Number(summaSell.value) + Number(sell)
      }
   })
})
