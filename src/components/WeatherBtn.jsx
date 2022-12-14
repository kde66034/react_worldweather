import React, { useCallback } from "react";

const keyword = [
    { name: "Seoul" },
    { name: "Tokyo" },
    { name: "New York" },
    { name: "Toronto" },
    { name: "London" },
    { name: "Paris" },
    { name: "Sydney" },
];

const SearchBtn = ({data, func}) => {
    return <li onClick={func}>{data.name}</li>;
};

export const WeatherBtn = ({ onSearch }) => {
    const onClickSearch = useCallback(
      (e) => {
        onSearch(e.target.textContent);
      },
      [onSearch]
    );
  
    return (
      <section className="cont__weatherBtn">
        <h3>주요 도시 목록</h3>
        <ul className="weather__btn">
          {keyword.map((v, index) => (
            <SearchBtn key={v + index} func={onClickSearch} data={v} />
          ))}
        </ul>
      </section>
    );
  };
  
  export default WeatherBtn