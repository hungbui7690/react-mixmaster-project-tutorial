import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
import { useQuery } from '@tanstack/react-query' // 4.

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// 5. load is not a hook
export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''

  return { searchTerm }
}

// 6.
const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    },
  }
}

const Landing = () => {
  const { searchTerm } = useLoaderData() // 7.
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm)) // 8. useQuery is a hook -> follow hook rules

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
