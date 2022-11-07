/* buttonclicked() function */
function buttonClicked(){ 

    var city = document.getElementById("city_input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=658767b0ae936b022f59a69f44868419&units=metric`)
    .then((response) => response.json())
    .then((data) => {

        /* display data on console */
        console.log(data);
        console.log(data.sys.country);
        console.log((data.main.temp-273.15).toFixed(2));
        console.log(data.wind.speed);
        console.log((data.main.pressure).toFixed(2));
        console.log(data.coord.lat);
        console.log(data.coord.lon);
        
        /* display data to application */ 
        document.getElementById("hiking").innerHTML = "Choosen Hiking Spot is " + city + " / " + (data.sys.country);
        document.getElementById("temp").innerHTML = "Temperature is " + " : " + (data.main.temp).toFixed(2) + " °C ";
        document.getElementById("wind").innerHTML = "Wind speed is " + " : " + (data.wind.speed);
        document.getElementById("humid").innerHTML = "Humidity is " + " : " + (data.main.humidity);
        document.getElementById("lat").innerHTML = "Latitude in " + " : " + (data.coord.lat);
        document.getElementById("lot").innerHTML = "Longitude in " + " : " + (data.coord.lon);

    })
}