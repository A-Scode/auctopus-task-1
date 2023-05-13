const DataList = {
    country:[
        "IN", "US"
    ],
    state:{
        IN:["Delhi" , "Maharashtra"],
        US:["DC" , "LA"]
    },
    location:{
        
            Maharashtra:["Mumbai" , "Pune"],
            Delhi:["Nehru Place" , "Dwarka"],
       
            DC:["ABC" , "EFG"],
            LA:["IJK" , "LMN"]

    }
}

console.log(DataList);
render();

function render(){
    const country = document.getElementById("country");
    let country_value = country.value;
    const state = document.getElementById("state");
    let state_value = state.value;
    const location = document.getElementById("location");
    let location_value = location.value;

    console.log(country , state , location)

    country.innerHTML = `<option value="" selected disabled>--Select-Value--</option>`
    for ( i of DataList.country){
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        option.selected = false;
        country.appendChild(option);
    }
    country.value = country_value;
    state.innerHTML = `<option value="" selected disabled>--Select-Value--</option>`
    for ( i of DataList.state[country_value]||[]){
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        option.selected = false;
        state.appendChild(option);
    }
    state.value = state_value;
    location.innerHTML = `<option value="" selected disabled>--Select-Value--</option>`
    console.log(country_value , state_value)
    for ( i of DataList.location[state_value]||[]){
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        option.selected = false;
        location.appendChild(option);
    }
    location.value = location_value;
    
}


function fetchData(){
    const url = "";
    const method = "GET";
    let xhr = new XMLHttpRequest();
    xhr.open(method , url);
    xhr.onreadystatechange = ()=>{

        if ( xhr.status === 200 && xhr.readyState === 4){
            // Modify data list
            DataList = JSON.parse(xhr.response).data;

            // re-render view
            render();

        }

    }

    xhr.send()
}