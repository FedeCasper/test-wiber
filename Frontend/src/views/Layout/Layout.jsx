import './Layout.css';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Layout = () => {
   return (
      <div className='layout-container'>
         <Header />
         <main className='layout-main'>
            <Outlet />
         </main>
         <Footer />
      </div>
   )
}

export default Layout;