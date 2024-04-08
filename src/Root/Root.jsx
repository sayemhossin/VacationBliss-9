import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';
const Root = () => {
    return (
        <div>
           <div className='container mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
         
           </div>
           <div className='mt-14'>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;