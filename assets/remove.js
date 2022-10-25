function removeData(id){
    //obtiene los datos del localstorage y almacenarlos en el array contaclist
    //debemos usar JSON.parse, porque los datos son una cadena, necesitamos convertirlos en un array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList = contactList.filter(function(value){ 
        return value.id != id; 
    });

    localStorage.setItem('listItem', JSON.stringify(contactList))


    allData()
}