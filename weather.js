const inputBox = document.querySelector('.input_box');
const searchBtn= document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather_img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind_speed');

 async function checkWeather(city){
       const api_key="7aa2d78ff5ce66a10066594aa1de17ec";

       const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

       const weather_data = await fetch(`${url}`).then
       (response => response.json());
         console.log(weather_data)
       temperature.innerHTML =`${Math.round
          (weather_data.main.temp - 273.15)}°C`;
      description.innerHTML =`${weather_data.weather[0].description}`
      humidity.innerHTML=`${weather_data.main.humidity}%`;

      wind_speed.innerHTML=`${weather_data.wind.speed}Km/h`;

      weather_img.src =`https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@4x.png`
     }
        

searchBtn.addEventListener('click',()=>{
     checkWeather(inputBox.value);''
});
