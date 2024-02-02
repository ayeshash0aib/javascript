// fetch("https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=5f053f92834efdbea4457f985befe2e9&unit=metric")
// .then( function(res){
//     return res.json()
// })
// .then( function(result){console.log(result.main.temp)})

function gettemp(){
    getval=document.getElementById("search").value;
    console.log(getval)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getval}&appid=5f053f92834efdbea4457f985befe2e9&unit=metric`)
    .then( function(res){
        return res.json()
    })
    .then( function(result){console.log(result.main.temp)
    document.getElementById("head").innerHTML=result.main.temp
    })

}

