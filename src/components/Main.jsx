import React, { useEffect, useState } from 'react';

import { fetchAPI } from "../utils/fetchAPI";
import { useParams, Link } from 'react-router-dom'

import WeatherLeft from "./WeatherLeft";
import WeatherRight from "./WeatherRight";

const Main = () => {
  return (
    <main id="main">
      <div className="weather__wrap">
        <div className="weather__inner container">
          <WeatherRight />
        </div>
      </div>
    </main>
  )
}

export default Main