    function allData(){
            
        table.innerHTML = ``
        //obtiene los datos del localstorage y almacenarlos en el array contaclist
        //debemos usar JSON.parse, porque los datos son una cadena, necesitamos convertirlos en un array
        contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    
        //recibir datos y mostrarlos en una tabla
        contactList.forEach(function (value, i){
           
            let table = document.getElementById('table')
    
            table.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td>${value.name}</td>
                    <td>${value.age}</td>
                    <td>${value.gender}</td>
                    <td>${value.phone}</td>
                    <td>${value.profession}</td>
                    <td>${value.date}</td>
                    <td>
                        <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>`
        })
    }