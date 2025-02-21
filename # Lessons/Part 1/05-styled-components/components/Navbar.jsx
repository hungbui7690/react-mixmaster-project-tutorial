import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// 1.
const StyledBtn = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <span className='logo'>
          {/* 2. */}
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
