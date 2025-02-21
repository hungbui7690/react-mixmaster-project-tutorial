import { useLoaderData, Link, Navigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'
import axios from 'axios'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

// 1. {params}
export const loader = async ({ params }) => {
  const { id } = params // get id from params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  return { id, data } // must have return
}

// 2.
const Cocktail = () => {
  const { id, data } = useLoaderData()

  if (!data) return <Navigate to='/' /> // # navigate to / if there's no data

  const singleDrink = data.drinks[0]
  console.log('singleDrink: ', singleDrink)

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  // # convert object to array -> filter Non-null Ingredients -> convert back to array
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])
  console.log('validIngredients: ', validIngredients)

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img'></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item} {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span className='drink-data'>instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
