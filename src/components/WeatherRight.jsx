import React, { useState } from 'react'
import moment from 'moment';
import axios from 'axios';
import WeatherBtn from './WeatherBtn'
import clearIcon from '../assets/img/weather/icon/Clear.svg'
import cloudyIcon from '../assets/img/weather/icon/Clouds.svg'
import rainyIcon from '../assets/img/weather/icon/Rain.svg'
import snowyIcon from '../assets/img/weather/icon/Snow.svg'
import selectIcon from '../assets/img/weather/select.svg'
import { AiOutlineSearch } from 'react-icons/ai';

const WeatherRight = () => {
    const API_KEY = "1a4c2e2a9be3faa42469b7cda67746a0";
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&lang=kr&units=metric`;
    // const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&lang=kr&units=metric`;
    
    const searchWeather = async (e) => {
        if(e.key === 'Enter'){
            try {
                const data = await axios({
                    method: 'get',
                    url: url,
                })
                console.log(data);
                setResult(data);
            }
            catch (err) {
                alert(err);
            }
        }
    };
    const onClick = () => {
        searchWeather();
    };

  return (
    <>  
        <div className={`weather__wrap ${Object.keys(result).length !== 0 && (
            `b${result.data.weather[0].icon}`
        )}`}>
            <div className="weather__inner container">
                <div className="weather__left">
                    <a href="/"><h2 className="weather_title">WORLD WEATHER</h2></a>
                    <div className="weather__bottom">
                        {Object.keys(result).length !== 0 && (
                            <>
                                <div className="weather_temp">
                                    {Math.round(result.data.main.temp)}˚
                                </div>
                                <div className="weather__region">
                                    {result.data.name}
                                    <p className="weather_time">{moment().format('YYYY-MM-DD')}</p>
                                </div>
                                <div className="weather__desc">
                                    <img className="weather_icon" src={`img/${result.data.weather[0].icon}.svg`} alt={result.data.weather[0].description} />
                                    <p className="weather_icon_desc">{result.data.weather[0].description}</p>
                                </div>
                            </>
                        )}
                        {Object.keys(result).length === 0 && (
                            <div className='weather__pleaseSearch'>
                                <div className="todaysweather">오늘의 날씨는?</div>
                                <p className='todaysweather__desc'>우측 상단의 검색 영역에서 도시명을 검색해주세요.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="weather__right">
                    <div className="selectBox">
                        <input
                            placeholder='도시명을 검색해보세요. (ex: Seoul, London)'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            type='text'
                            onKeyDown={searchWeather}
                        />
                        <button type='submit' className='weatherSearch__btn' onClick={onClick}>
                            <AiOutlineSearch />
                        </button>
                    </div>

                    <WeatherBtn onSearch={searchWeather} />

                    <h3>날씨 상세정보</h3>
                    <div className="weather__info">
                        {Object.keys(result).length !== 0 && (
                            <>
                                <ul className="info__title">
                                    <li>최저/최고기온</li>
                                    <li>현재 체감온도</li>
                                    <li>풍속</li>
                                    <li>습도</li>
                                    <li>기압</li>
                                </ul>
                                <ul className="info__data">
                                    <li className="info_data_temp">{Math.round(result.data.main.temp_min)}˚ / {Math.round(result.data.main.temp_max)}˚</li>
                                    <li className="info_data_sens">{Math.round(result.data.main.feels_like)}˚</li>
                                    <li className="info_data_wind">{result.data.wind.speed} m/s</li>
                                    <li className="info_data_hum">{result.data.main.humidity} %</li>
                                    <li className="info_data_sight">{result.data.main.pressure} hPa</li>
                                </ul>
                            </>
                        )}
                        {Object.keys(result).length === 0 && (
                            <ul className="info__title">
                                <li>
                                    도시명을 검색하시면 오늘의 최저기온과 최고기온 및 풍속, 습도, 체감온도 등 상세한 날씨 정보를 제공해드립니다.
                                </li>
                            </ul>
                        )}
                    </div>

                    <hr />

                    <h3 className="tenday">10일 날씨 예보</h3>
                    {/* {Object.keys(result).length !== 0 && (
                        <div className="weather__news">
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-24 (금)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">{result.data2.list[0].main.temp_min}˚ / {result.data2.list[0].main.temp_max}˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-25 (금)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">6˚ / 16˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-26 (토)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">5˚ / 22˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-27 (일)</div>
                            <div className="weather_day_icon">
                                <img src={cloudyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">10˚ / 19˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-28 (월)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">6˚ / 7˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-29 (화)</div>
                            <div className="weather_day_icon">
                                <img src={cloudyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">2˚ / 5˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-30 (수)</div>
                            <div className="weather_day_icon">
                                <img src={cloudyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">3˚ / 6˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">12-01 (목)</div>
                            <div className="weather_day_icon">
                                <img src={snowyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">-1˚ / 11˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">12-02 (금)</div>
                            <div className="weather_day_icon">
                                <img src={snowyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">-5˚ / 6˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">12-03 (토)</div>
                            <div className="weather_day_icon">
                                <img src={snowyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">24˚ / 37˚</div>
                        </div>
                        </div>
                    )} */}
                    <div className="weather__news">
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-24 (금)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">0˚ / 0</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-25 (금)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">6˚ / 16˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-26 (토)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">5˚ / 22˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-27 (일)</div>
                            <div className="weather_day_icon">
                                <img src={cloudyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">10˚ / 19˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-28 (월)</div>
                            <div className="weather_day_icon">
                                <img src={clearIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">6˚ / 7˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-29 (화)</div>
                            <div className="weather_day_icon">
                                <img src={cloudyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">2˚ / 5˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">11-30 (수)</div>
                            <div className="weather_day_icon">
                                <img src={cloudyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">3˚ / 6˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">12-01 (목)</div>
                            <div className="weather_day_icon">
                                <img src={snowyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">-1˚ / 11˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">12-02 (금)</div>
                            <div className="weather_day_icon">
                                <img src={snowyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">-5˚ / 6˚</div>
                        </div>
                        <div className="weather__day day1">
                            <div className="weather_day_date">12-03 (토)</div>
                            <div className="weather_day_icon">
                                <img src={snowyIcon} alt="눈" />
                            </div>
                            <div className="weather_day_temp">24˚ / 37˚</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherRight