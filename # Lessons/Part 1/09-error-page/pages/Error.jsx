import Wrapper from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom'
import img from '../assets/not-found.svg'

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! </h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
