/*
  SPA
  - SPA stands for Single-Page Application, which is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.
  - React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.

  ~~ npm i react-router-dom@6.11.2


******************************

  ⚡ https://reactrouter.com/en/main/start/tutorial


*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
