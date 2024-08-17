import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
      <Link to='/'>Back Home</Link>
    </div>
  )
}

export default About
