/*
  Global Loading and Context
  - try to go to /About then go back to homepage
    -> we can see the data is not loading right away
    -> since we still need to re-fetch data -> then display 


***************************

  useNavigation()
  - from react-router
  - return the state of our application
    -> is it loading or not 

    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';


***************************

  - <Outlet> can now receive a context prop. This value is passed to child routes and is accessible via the new useOutletContext hook

      <Outlet context={{ value }}


***************************

  1. HomeLayout
  2. CocktailCard


*/

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNavigation } from 'react-router-dom'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  const value = 'some value'

  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          // 1. pass to children -> go to CocktailCard
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  )
}
export default HomeLayout
