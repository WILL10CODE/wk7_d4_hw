const apiKey = "4296408a981891cc18114239e3e5415d",
  

fetchWeather = function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + 
        city + 
        "&units=imperial&appid=" + 
        apiKey
    )
        .then((response) => response.json())
        .then((data) => displayWeather(data));
    }
displayWeather = function(data) {
    const { name } = data;
    const description = data.weather[0]["description"];
    const {temp_min, temp_max, humidity} = data.main;
    console.log(name,description, temp_min, temp_max, humidity);
    document.querySelector(".city").innerText = " How is the weather in " + name + "?";
    document.querySelector(".icon").src = "°";
    document.querySelector(".description").innerText ="Forecast: " + description;
    document.querySelector(".low_temp").innerText = "Low Temperature: " + temp_min + "°F";
    document.querySelector(".high_temp").innerText= "High Temperature: " + temp_max + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";

};

getData = () => {
    fetchWeather(document.querySelector(".search_bar").value);

};

document.querySelector(".w_search").addEventListener("click", function() {
    getData()
});

