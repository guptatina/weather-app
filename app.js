
let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit')
let icons = document.querySelector('.icon')
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a0f6415b038da9d76a4f356f7fed9cb0')
.then(response => response.json())
.then(data =>
     {
  let tempValue = data ['main']['temp']-273.15;
  let nameValue = data['name'];
  let descValue = data['weather'][0]['description'];
  let iconValue = data['weather'][0]['icon'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Feels like: "+descValue;
  temp.innerHTML = `Temperature: ${Math.round(tempValue)}°C`;
  input.value ="";
  document.querySelector(".icons").src = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png"
})

.catch(err => alert("Could not identify city name! Try another city!"));
})