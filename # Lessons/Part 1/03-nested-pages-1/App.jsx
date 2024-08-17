/*
  Nested Pages


****************************

  1. App.jsx
  

****************************

  ❌ with this setup, all the children pages show the same contents -> HomeLayout


*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, About, Landing, Cocktail, Newsletter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
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
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
