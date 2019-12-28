const status = document.querySelectorAll('select[name="status"]')
const state = document.querySelectorAll('select[name="state"]')
status.forEach(function (item) {
   item.addEventListener('input', function (event) {
      const jsonObject = {}
      jsonObject.status = item.value
      jsonObject.id = item.getAttribute('data-id')
      //console.log(jsonObject)
      const statusChange = JSON.stringify(jsonObject);
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/orders/changestatus")
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(statusChange)
})
})

state.forEach(function (item) {
   item.addEventListener('input', function (event) {
      const jsonObject = {}
      jsonObject.state = item.value
      jsonObject.id = item.getAttribute('data-id')
      //console.log(jsonObject)
      const stateChange = JSON.stringify(jsonObject);
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/orders/changestate")
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(stateChange)
})
})