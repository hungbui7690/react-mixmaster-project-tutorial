/*
  Nested Pages
  - to fix -> Outlet
    -> Outlet === children 


***********************

  1. HomeLayout
  2. About


***********************

  - If we want to use the Landing component for / -> add "index: true"
    {
      path: 'landing',
      index: true,
      element: <Landing />,
    },


*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, About, Landing, Cocktail, Newsletter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true, // # remove path property + add index
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
        element: <About />, // # add children
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
