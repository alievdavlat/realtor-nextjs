import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
const { data } = await axios.get((url), {

  headers: {
    'X-RapidAPI-Key': 'dfc4e6b269msh96faf849bf89b91p1ef2b4jsndcb5d92e6cc5',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }  

})

return data
}