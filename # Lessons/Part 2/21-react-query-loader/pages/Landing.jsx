import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
import { useQuery } from '@tanstack/react-query'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// 2. we want to invoke the useQuery in the loader -> need to use queryClient
export const loader = (queryClient) => {
  return async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || ''

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm)) // #
    return { searchTerm }
  }
}

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
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
