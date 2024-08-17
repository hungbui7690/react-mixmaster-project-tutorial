/*
  Loader
  - Normally, when we fetch data -> we use this 

      const fetchSomething = async () => {}
      useEffect(() => {
        fetchSomething()
      }, [])


  - But we also can use "loader" as well 
    -> Each route can define a "loader" function to provide data to the route element before it renders.
    -> must return something even "null" otherwise error


****************************

  1. Landing.jsx
  2. App.jsx


*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  About,
  Landing,
  Cocktail,
  Newsletter,
  Error,
} from './pages'
import { loader as landingLoader } from './pages/Landing' // 2.

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader, // 3. Method 1
        // loader: () => {}, // 4. Method 2
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
