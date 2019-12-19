function Summ() {
   document.querySelectorAll('.part-item').forEach(function (elem) {
      elem.addEventListener('input', function (event) {
         //let price = event.target.value
         let quantity = elem.querySelector('input[name="countpart"]').value
        // 
         if (event.target.className == 'dva' || 'purchaseprice') {
            const li = elem.querySelectorAll('.li-list-option')
            li.forEach(function (item) {
               let price = item.querySelector('input[name="purchaseprice"]').value
               let buySumm = item.querySelector('input[name="buy"]')
               buySumm.value = quantity*price
            })
            
            
         }
       })
   });
}
 

