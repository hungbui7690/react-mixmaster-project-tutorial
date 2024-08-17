/*
  Single Page Error
  - bubbles up
  - no return from loader
  - wrong url


***************************

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
      ...
      ...
    ]
  }

  - <Error /> -> Global error page
  - <SinglePageError /> -> Error only for / 


***************************

  1. Landing.jsx
    -> create error on Landing.jsx
    -> comment -> return { drinks: response.data.drinks, searchTerm }
    -> change url to create server error


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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />, // # global page error
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />, // # single page error
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
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
