const apiKey="0d44267785b41b50b51e5453423b2847"
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchInput=document.querySelector(".search input")
const btnSearch=document.querySelector(".search button")
const weatherIcon=document.querySelector('.weather-icon')


async function checkweather(cyty){
    const response=await fetch(apiURL+cyty+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        
    }else{
        var data=await response.json();
        // console.log(data)
    
       let city= document.querySelector(".city")
       city.innerHTML=data.name
    
       let temp =document.querySelector('.temp')
       temp.innerHTML = `${Math.round(data.main.temp)}°C `
    
      let humidity= document.querySelector(".humidity")
      humidity.innerHTML=`${data.main.humidity}%`
    
      let wind=document.querySelector(".wind")
      wind.innerHTML=` ${data.wind.speed} km/h`
    
      if(data.weather[0].main=='Clouds'){
        weatherIcon.src='./images/clouds.png'
      }else if(data.weather[0].main=='Rain'){
        weatherIcon.src='./images/rain.png'
    }else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='./images/drizzle.png'
    }else if(data.weather[0].main=='Mist'){
        weatherIcon.src='./images/mist.png'
    }else if(data.weather[0].main=='Snow'){
        weatherIcon.src='./images/snow.png'
    }else{
        weatherIcon.src='./images/clear.png'
    }
    
    
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none"
    
    }
   
}

btnSearch.addEventListener("click",()=>{
    checkweather(searchInput.value)
})
// checkweather()