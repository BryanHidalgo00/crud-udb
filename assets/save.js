 
function save(){
 
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    let id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

 
        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.name      = document.getElementById('name').value, 
                value.age       = document.getElementById('age').value, 
                value.gender   = document.getElementById('gender').value, 
                value.phone     = document.getElementById('phone').value
                value.profession     = document.getElementById('profession').value
                value.date     = document.getElementById('date').value
            }
        });

 
        document.getElementById('id').value = ''

    }else{

 
        let item = {
            id        : id + 1, 
            name      : document.getElementById('name').value, 
            age       : document.getElementById('age').value, 
            gender   : document.getElementById('gender').value, 
            phone     : document.getElementById('phone').value,
            profession : document.getElementById('profession').value,
            date : document.getElementById('date').value
        }

 
        contactList.push(item)
    }


    localStorage.setItem('listItem', JSON.stringify(contactList))

    //update table list
    allData()


    document.getElementById('form').reset()
}