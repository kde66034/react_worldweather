import axios from 'axios'

const BASE_URL = "https://weatherapi-com.p.rapidapi.com/current.json"

const options = {
  url: BASE_URL,
  params: {q: 'seoul'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const fetchAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}