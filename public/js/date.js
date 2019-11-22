const toDate = date => {
   return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
}).format(new Date(date))
}


console.log(document.querySelectorAll('.date'))
document.querySelectorAll('.date').forEach(node => {
   node.textContent = toDate(node.textContent)
})
