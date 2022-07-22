function callOpenWeatherAPI(city){
  let key = '';
  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key,
    type: "GET",
    dataType: "json",
    success: function(data){
      showData(data);
      console.log(data);
    }
  });
}

function showData(data){
  if(data != null){
  document.getElementById('weatherIcon').src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
  document.getElementById('temperature').innerHTML = parseInt(data.main.temp -273.15) + " &deg;C";
  document.getElementById('city').innerHTML = data.name;
  document.getElementById('weatherIcon').style.visibility = "visible";
  }
}

$(document).ready(function(){
  document.getElementById('weatherIcon').style.visibility = "hidden";
  callOpenWeatherAPI('Belgrade');
});
