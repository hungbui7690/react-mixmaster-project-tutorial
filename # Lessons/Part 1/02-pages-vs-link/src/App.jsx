/*
  Setup Pages
  - pages are components
  - create src/pages -> About, Cocktail, Error, HomeLayout, Landing, Newsletter, index.js
  - export from index.js


*************************

  Link Component
  1. About.jsx


*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, About } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
