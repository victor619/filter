const filter  = document.getElementById('filter')
const list = document.getElementById('list')

filter.addEventListener('keyup', search)

function search(){
  let filter_value = filter.value.toUpperCase()
  let items = document.getElementsByTagName('li')

  for (let i = 0; i < items.length; i++) {
    let a = items[i].getElementsByTagName('a')[0]

    if(a.innerHTML.toUpperCase().indexOf(filter_value)>-1){
    items[i].style.display = ''
     }

  else{ 
      items[i].style.display = 'none'
    }
   }
}