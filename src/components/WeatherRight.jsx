import React from 'react'
import clearIcon from '../assets/img/weather/icon/Sunny-Bold.svg'
import cloudyIcon from '../assets/img/weather/icon/PartlyCloudy-Bold.svg'
import rainyIcon from '../assets/img/weather/icon/Rainy-Bold.svg'
import snowyIcon from '../assets/img/weather/icon/Snowy-Bold.svg'
import selectIcon from '../assets/img/weather/select.svg'

const WeatherRight = () => {
  return (
    <div className="weather__right">
        <form action="https://sukjun2.github.io/codingclassName/project/weather.html" name="regionSearch">
            <fieldset>
                <legend>지역 선택 영역</legend>
                <div className="selectBox">
                    <select name="searchRegion" id="searchRegion" className="select">
                        <option value="" disabled="" selected="">다른 지역 선택</option>
                        <option value="Seoul">Seoul</option>
                        <option value="Paris">Paris</option>
                        <option value="Tokyo">Tokyo</option>
                    </select>
                    <span className="icoArrow">
                        <img src={selectIcon} alt="select 화살표" />
                    </span>
                </div>
            </fieldset>
        </form>

        <h3>날씨 상세정보</h3>
        <div className="weather__info">
            <ul className="info__title">
                <li>최저/최고기온</li>
                <li>자외선 지수</li>
                <li>풍속</li>
                <li>습도</li>
                <li>가시거리</li>
                <li>체감온도</li>
                <li>미세먼지</li>
            </ul>
            <ul className="info__data">
                <li className="info_data_temp">-1˚ / 11˚</li>
                <li className="info_data_ray">낮음</li>
                <li className="info_data_wind">7.70km/h</li>
                <li className="info_data_hum">67%</li>
                <li className="info_data_sight">8.2km</li>
                <li className="info_data_sens">-2˚ / 13˚</li>
                <li className="info_data_dust">102</li>
            </ul>
        </div>

        <hr />

        <h3 className="tenday">10일 날씨 예보</h3>
        <div className="weather__news">
            <div className="weather__day day1">
                <div className="weather_day_date">11-24 (목)</div>
                <div className="weather_day_icon">
                    <img src={clearIcon} alt="눈" />
                </div>
                <div className="weather_day_temp">-2˚ / 6˚</div>
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
  )
}

export default WeatherRight