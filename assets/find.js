function find(id){
    //obtener datos de localstorage y almacenarlos en un array de contaclist
    //debemos usar JSON.parse, porque los datos son una cadena, necesitamos convertirlos en un array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('name').value = value.name
           document.getElementById('age').value = value.age
           document.getElementById('gender').value = value.gender
           document.getElementById('phone').value = value.phone
           document.getElementById('profession').value = value.profession
           document.getElementById('date').value = value.date
        }
    })
}