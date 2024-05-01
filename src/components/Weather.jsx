import React from 'react'
import drizzle from '../assets/drizzle.png'
import monsoon from '../assets/monsoon.jpg'
import heat from '../assets/heat.jpg'
import searchi from '../assets/search.png'
import humidityi from '../assets/humidity.png'
import windi from '../assets/wind.png'
import "./Weather.css"


export default function  Weather() {
    let api="897f394cece73fdd121f176c1dd9e7ca"

    const sear=async ()=>{
             const element=document.getElementsByClassName('city')
if(element[0].value===""){
    return 0
}   

let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`

let response =await fetch(url)
let data= await response.json();
console.log(data)
const humidity=document.getElementsByClassName('humidity')
const wind=document.getElementsByClassName('wind')
const temp=document.getElementsByClassName('weathertemp')
const loc=document.getElementsByClassName('location')
humidity[0].innerHTML=data.main.humidity+"%";
wind[0].innerHTML=data.wind.speed+"km/hr";
temp[0].innerHTML=data.main.temp +"°C";
loc[0].innerHTML=data.name;

}

const handlekeypress=(e)=>{
   if(e.key==='Enter'){
       sear();
   }
}

return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="city" placeholder='CITY NAME' onKeyDown={(e)=>handlekeypress(e)} />
            <div className="search" onClick={()=>{sear()}}>
               <img src={searchi} alt="search" />
            </div>
        </div>
    
    <div className="weatherimg">
        <img src={drizzle} alt="" />
    </div>
   <div className="weathertemp"></div>
   <div className="location"></div>

   <div className="data-container">
       <div className="element">
        <img src={humidityi} alt="" className='icon' />
        <div className="data">
            <div className="humidity">64%</div>
            <div className="text">Humidity</div>
            <br />
        </div>
        </div>
       <div className="element">
        <img src={windi} alt="" className='icon'/>
        <div className="data">
            <div className="wind">km/hr</div>
            <div className="text">WIND</div>
            
        <br />
        </div>
    </div>
   </div>
   </div>

  )
}
