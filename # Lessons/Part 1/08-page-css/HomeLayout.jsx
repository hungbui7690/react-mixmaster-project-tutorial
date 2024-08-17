/*
  Page CSS
  - we can see that in Navbar components -> we use "nav-center" class the create the gap on both sizes
    -> that is because of the width, max-width, margin, padding

        width: var(--view-width);
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 1.5rem 2rem;

  - in About component -> we need to do the same thing 


*****************************

  - to fix the above problem -> we need to use the .page class

  1. index.css
      .page {
        width: var(--view-width);
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 5rem 2rem;
      }

  2. HomeLayout.jsx


*/

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <div>
      <Navbar />

      {/* 2. */}
      <section className='page'>
        <Outlet />
      </section>
    </div>
  )
}
export default HomeLayout
