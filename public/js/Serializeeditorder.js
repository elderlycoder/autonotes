
document.querySelector('button[name="button"]').addEventListener("click", function (e) {
   //e.preventDefault();
   // получаем данные формы
   const jsonObject = {}
   const addorderForm = document.forms["myForm"];
   jsonObject.id = addorderForm.elements["id"].value;
   jsonObject.orderContactId = addorderForm.elements["idcontact"]
   .value;
   jsonObject.orderDate = addorderForm.elements["start"].value;
   jsonObject.orderDesc = addorderForm.elements["desc"].value;
   jsonObject.orderStatus = addorderForm.elements["status"].value;
   jsonObject.orderState = addorderForm.elements["state"].value;


   let partsplace = addorderForm.querySelectorAll('.part-item')
   partsname = addorderForm.querySelectorAll('input[name="partname"]'),
      selectside = addorderForm.querySelectorAll('select[name="selectside"]'),
      selectplace = addorderForm.querySelectorAll('select[name="selectplace"]'),
      countpart = addorderForm.querySelectorAll('input[name="countpart"]')

   let arrayParts = []
   for (let i = 0; i < partsplace.length; i++) {
      let objPart = {}
      objPart.partname = partsname[i].value
      objPart.selectside = selectside[i].value
      objPart.selectplace = selectplace[i].value
      objPart.countpart = countpart[i].value

      let partOptions = partsplace[i].querySelectorAll('.li-list-option')
      number = partsplace[i].querySelectorAll('input[name="number"]')
      manufacturer = partsplace[i].querySelectorAll('input[name="manufacturer"]')
      provider = partsplace[i].querySelectorAll('input[name="provider"]')
      purchaseprice = partsplace[i].querySelectorAll('input[name="purchaseprice"]')
      sellingprice = partsplace[i].querySelectorAll('input[name="sellingprice"]')

      arrayOptions = []
      for (let j = 0; j < partOptions.length; j++) {
         let objOption = {}
         objOption.number = number[j].value
         objOption.manufacturer = manufacturer[j].value
         objOption.provider = provider[j].value
         objOption.purchaseprice = purchaseprice[j].value
         objOption.sellingprice = sellingprice[j].value

         arrayOptions.push(objOption)
      }
      objPart.variant = arrayOptions
      arrayParts.push(objPart)
   }
   jsonObject["partnames"] = arrayParts
   console.log(jsonObject)
   //сериализуем данные в json
   let order = JSON.stringify(jsonObject);
   
   sendRequest("POST", "/orders/edit", order)
      .then(document.location.href = "http://localhost:5000/orders")
      .catch(err => console.log(err))
});

function sendRequest(method, url, body = null) {
   return new Promise((resolve, rejects) => {
      const xhr = new XMLHttpRequest(); // создаем новый объект
      //xhr.open("POST", "/addorder", true);// открываем запрос
      xhr.open(method, url)
      xhr.setRequestHeader("Content-Type", "application/json"); // меняем формат отправляемого заголовка, (по умолчанию: "Content-Type", "plain/text")
      xhr.onload = () => {
         if (xhr.status >= 400) {
            rejects(xhr.response)
         } else {
            resolve(xhr.response)
         }
      }
       xhr.send(body);
   });
}

