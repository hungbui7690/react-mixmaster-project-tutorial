/*
  FormData API
  - covered in React fundamentals
  - a great solution when you have bunch of inputs
  - inputs must have name attribute

  - The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".


*****************************

  React Router - Action
  - Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation. This gives you the simple mental model of HTML + HTTP (where the browser handles the async and revalidation) with the behavior and UX capabilities of modern SPAs.

  1. pages/Newsletter.jsx
  2. App.jsx


*****************************

  <Form>
  - The Form component is a wrapper around a plain HTML form that emulates the browser for client side routing and data mutations. It is not a form validation/state management library like you might be used to in the React ecosystem (for that, we recommend the browser's built in HTML Form Validation and data validation on your backend server).


  - Instead of using JS to check for <required> -> we use html to check
      <input type='text' className='form-input' name='lastName'
        id='lastName' defaultValue='smith'
        required
      />


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
import { action as newsletterAction } from './pages/Newsletter' // 5.

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
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        action: newsletterAction, // 6.
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
