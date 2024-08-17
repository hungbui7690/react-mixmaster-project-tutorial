/*
  Search Form

  1. components/SearchForm.jsx
  2. pages/Landing.jsx

  - when we click Search button 
    -> return this url: http://localhost:5173/?search=vodka


******************************

  Query Params
  - const url = new URL(request.url) similar to: 
    const url = new URL('http://localhost:5173/?search=vodka')
    -> https://developer.mozilla.org/en-US/docs/Web/API/URL/URL

      url {
        hash:         ""
        host:         "localhost:5173"
        hostname:     "localhost"
        href:         "http://localhost:5173/?search=vodka"
        origin:       "http://localhost:5173"
        password:     ""
        pathname:     "/"
        port:         "5173"
        protocol:     "http:"
        search:       "?search=vodka"
        searchParams: URLSearchParams {size: 1}
        username    : ""
      }


  - const searchTerm = url.searchParams.get('search') || '';
    -> https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams


*/

import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm} // 4.
        />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm // 1.
