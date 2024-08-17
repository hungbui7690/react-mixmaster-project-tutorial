import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = () => {
  return (
    <Wrapper>
      <form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue='vodka'
        />
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    </Wrapper>
  )
}

export default SearchForm
