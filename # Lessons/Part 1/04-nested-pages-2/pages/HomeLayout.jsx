import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
export default HomeLayout
