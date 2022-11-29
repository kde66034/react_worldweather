import React, { useEffect } from 'react'
import clearIcon from '../assets/img/weather/icon/Sunny-Bold.svg'
import cloudyIcon from '../assets/img/weather/icon/PartlyCloudy-Bold.svg'
import rainyIcon from '../assets/img/weather/icon/Rainy-Bold.svg'
import snowyIcon from '../assets/img/weather/icon/Snowy-Bold.svg'
import rainthunderIcon from '../assets/img/weather/icon/RainThunder-Bold.svg'

import { fetchAPI } from '../utils/fetchAPI'
import { useParams, Link } from 'react-router-dom'

const WeatherLeft = () => {
  return (
    <div className="weather__left">
        <h2 className="weather_title">WORLD WEATHER</h2>
        <div className="weather__bottom">
            <div className="weather_temp">
              -1˚
            </div>
            <div className="weather__region">
                Seoul
                <p className="weather_time">12:12 AM / 2022-11-24</p>
            </div>
            <div className="weather__desc">
                <img className="weather_icon" src={clearIcon} alt="날씨 아이콘" />
                <p className="weather_icon_desc">맑음</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherLeft