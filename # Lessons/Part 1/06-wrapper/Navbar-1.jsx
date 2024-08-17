/*
  Wrapper
  - only responsible for styling


*/

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// 1.
const Wrapper = styled.el`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`

// 2. create components and use Wrapper
const StyledBtn = () => {
  return (
    <Wrapper>
      <h1>Mix Master</h1>
    </Wrapper>
  )
}

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <span className='logo'>
          {/* 3. */}
          <StyledBtn>Mix Master</StyledBtn>
        </span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
