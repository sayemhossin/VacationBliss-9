import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import 'animate.css';






const Root = () => {
    return (
        <div>
           <div className='container mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <ToastContainer />
         
           </div>
           <div className='mt-14'>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;