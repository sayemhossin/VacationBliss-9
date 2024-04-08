import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
const Root = () => {
    return (
        <div>
           <div className='container mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Root;