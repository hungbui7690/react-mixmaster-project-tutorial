/*
  Setup React Toastify
  - https://fkhadra.github.io/react-toastify/installation


**************************

  1. main.jsx


**************************

  Newsletter Structure

  2. pages/Newsletter.jsx


**************************

  Default Behavior
  - The "method" attribute in an HTML form specifies the HTTP method to be used when submitting the form data to the server. The two commonly used values for the "method" attribute are:

    -> GET: This is the default method if the "method" attribute is not specified. When the form is submitted with the GET method, the form data is appended to the URL as a query string. The data becomes visible in the URL, which can be bookmarked and shared. GET requests are generally used for retrieving data from the server and should not have any side effects on the server.
    -> POST: When the form is submitted with the POST method, the form data is included in the request payload rather than being appended to the URL. POST requests are typically used when submitting sensitive or large amounts of data to the server, as the data is not directly visible in the URL. POST requests can have side effects on the server, such as updating or inserting data.

  - action attribute
    -> The "action" attribute in an HTML form specifies the URL or destination where the form data should be sent when the form is submitted. It defines the server-side script or endpoint that will receive and process the form data.
    -> If the action attribute is not provided in the HTML form, the browser will send the form data to the current URL, which means it will submit the form to the same page that the form is on. This behavior is referred to as a "self-submitting" form.


*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </StrictMode>
)
