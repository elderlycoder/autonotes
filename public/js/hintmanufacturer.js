function getModalHint(){
   let elem = document.querySelectorAll('input[name="manufacturer"]');
   //let parent = document.querySelectorAll('div[name="parent"]');
   //console.log(parent)
   
   elem.forEach(function (item, elem) {
      item.addEventListener('input', function () {
         
         let parent = this.parentElement.nextElementSibling;
         let ul = parent.firstChild;
         ul.innerHTML = '';
         
         if (this.value.length > 1) {
            let matches = arrManufacturer.filter(arrItem => arrItem.toLowerCase().startsWith(this.value));
         
            if (matches.length > 0) {
               for (let match of matches) {
                  
                  let li = document.createElement('li');
                  li.innerText = match;
                  ul.appendChild(li);

                  li.addEventListener('click', function () {
                     item.value = this.innerHTML;
                     ul.innerHTML = '';
                  })
               }
            }
         }     
      })
      
      })
   }


let arrManufacturer = ['ABA', 'Abro', 'ABS', 'ABT', 'ACDelco', 'Achim', 'ACHR', 'Activeavto', 'ADI', 'ADL',
   'Advantech', 'Advics', 'AE', 'AFA', 'Airtex', 'Alca', 'ALCO',
   'Alcar', 'Autoklacson']