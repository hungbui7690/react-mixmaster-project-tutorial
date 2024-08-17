import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'
import { useOutletContext } from 'react-router-dom'

const CocktailCard = ({ image, name, id, info, glass }) => {
  // 2. get the value that was sent from Outlet
  const { value } = useOutletContext()
  console.log(value)

  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>

        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </Wrapper>
  )
}

export default CocktailCard
