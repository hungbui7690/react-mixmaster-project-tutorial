/*
  TheCocktailDB
  - API : https://www.thecocktaildb.com/
    -> Search cocktail by name
        # https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    -> Lookup full cocktail details by id
        # https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007


********************************

  Search Term
  - https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
    -> empty search term returns some default drinks
    -> if search term yields not drinks drinks:null


********************************

  Landing - Fetch Drinks

    1. Landing.jsx


*/

import { useLoaderData } from 'react-router-dom'
import axios from 'axios'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// 1. use loader() to fetch for data
export const loader = async () => {
  const searchTerm = 'margarita'
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData() // 2.
  console.log(drinks)
  return <h1>Landing page</h1>
}

export default Landing
