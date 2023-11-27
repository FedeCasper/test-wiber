import { Link } from 'react-router-dom'

const LINKS = [
   { name: "Home", path: "/home" },
   { name: "Dashboard", path: "/dashboard" },
]
const Navbar = () => {
   return (
      <nav className='bg-warning d-flex justify-content-center gap-5 p-1'>
         { LINKS.map( link => (
            <Link key={link.path} to={link.path}>
               {" "}{link.name}{" "}
            </Link>
         )) }
      </nav>
   )
}

export default Navbar