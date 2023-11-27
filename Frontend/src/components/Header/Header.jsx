import './Header.css'
import Navbar from '../Navbar/Navbar.jsx'

const Header = () => {
   return (
      <header className='header'>
         <h2 className='text-light text-center'>FARM Stack app</h2>
         <Navbar />
      </header>
   )
}

export default Header