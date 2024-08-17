/*
  Single Cocktail
  - URL Params in Loaders
    -> https://reactrouter.com/en/main/route/loader#params


*******************************

  1. pages/Cocktail.jsx
  2. App.jsx


*******************************

  singleDrink = {
    ...
    strIngredient1 : "Tequila"
    strIngredient2 : "Blue Curacao"
    strIngredient3 : "Lime juice"
    strIngredient4 : "Salt"
    strIngredient5 : null
    ...
    strIngredient14 : null
    strIngredient15 : null
  }

  Step 1. 
    const validIngredients = Object.keys(singleDrink)
    -> [strIngredient1, strIngredient2, ..., strIngredient15]

  Step 2. 
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    -> [strIngredient1, strIngredient2, strIngredient3, strIngredient4]

  Step 3.
    .map((key) => singleDrink[key])
    -> ["Tequila", "Blue Curacao", "Lime juice", "Salt"]


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
import { loader as singleCocktailLoader } from './pages/Cocktail' // 3.

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        // 4.
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
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
  return <RouterProvider router={router} />
}

export default App
