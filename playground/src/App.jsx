/*
  React Query - Cache Single Cocktail
  1. pages/Cocktail
  2. App.jsx


***************************

  Deploy to Netlify
  - in public folder create "_redirects"
    -> /* /index.html 200

  
  🎈 This is a must when we deploy to netlify -> otherwise, our app won't work


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
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader(queryClient), // #
        errorElement: <h2>There was an error...</h2>,
        element: <Cocktail />,
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
