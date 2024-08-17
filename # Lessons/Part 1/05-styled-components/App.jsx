/*
  Navbar
  1. create components/Navbar.jsx
  2. HomeLayout


****************************

  Styled Components
  - CSS in JS
  - have logic and styles in component
  - no name collisions, since unique class
  - apply javascript logic
  - vscode-styled-components extension -> colors and bugs

  ~~ npm install styled-components


****************************

  3. Navbar.jsx


*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, About, Landing, Cocktail, Newsletter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
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
