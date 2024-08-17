/*
  React Query - Landing Page Loader
  - we want to cache the data in the Landing Page


****************************

  - queryClient.ensureQueryData
    -> ensureQueryData is an asynchronous function that can be used to get an existing query's cached data. If the query does not exist, queryClient.fetchQuery will be called and its results returned.


****************************

  - with this setup, we cached the Landing page 
    -> if we go to Network to check -> we can see that we don't need to make any extra request if we request the same searchTerm 
    -> or we also can use React Query DevTools to check


*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  About,
  Landing,
  Cocktail,
  Newsletter,
  Error,
  SinglePageError,
} from './pages'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient), // 1. passing queryClient
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'company',
            element: <h2>Company</h2>,
          },
          {
            path: 'Person',
            element: <h2>John Doe</h2>,
          },
        ],
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
