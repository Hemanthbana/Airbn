function mode(){
    let airbody =document.body;
    airbody.classList.toggle('body1');
}
function loadcoupan(){
    document.getElementById("coupan").style.visibility = "visible";
    document.getElementById("hotelcontainer").style.opacity= "0.2";

}
function closecoupan(){
    document.getElementById("coupan").style.visibility = "hidden";
    document.querySelector("#hotelcontainer").style.opacity= "1";
} 


let x = document.getElementByClass('out');
let y = document.getElementById('wethout');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo Not Supported"
    } 
}

// let c = document.getElementsByTagNameNS('button');

// function tempmode(){
//     console.log("c");
// }

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    let y = document.getElementById('wethout');
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url,{method: 'GET'})
    // return promise
    .then((res) => res.json())
    // resolve promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day;
        y.innerText = `In ${cityName} with ${temp}`
    })
    .catch((err) => {
        console.log(err)
    })

}
  
