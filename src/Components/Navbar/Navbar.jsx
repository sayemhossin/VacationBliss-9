import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import './Navbar.css'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }



  const links = <>
  <div className="flex  flex-col lg:flex-row" id="sidebar" >
    <li><NavLink  to={'/'}>Home</NavLink></li>
    <li><NavLink  to={'/about'}>About</NavLink></li>
   {
    user && <>
      <li><NavLink  to={'/profile'}>Profile details</NavLink></li>
    <li><NavLink  to={'/updateProfile'}>Update Profile</NavLink></li>
    <li><NavLink  to={'/contact'}>Contact Us</NavLink></li>
</>
   }
</div>
  </>

  return (
    <div className="navbar  mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <Link to={'/'} className=" hover:bg-white text-2xl  bg-gradient-to-r from-[#6d82df] via-[#093872] to-[#1b62b4] text-transparent bg-clip-text bg-300% animate-gradient font-extrabold btn-ghost  md:text-4xl">VacationBliss</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ?<>
           <div className="tooltip flex dropdown-end" data-tip={user?.displayName || 'user name not found'}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL  || 'https://i.ibb.co/sgsSHth/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg'} />
              </div>
            </label>
           
          </div>
          <div>
          <button
                  onClick={handleLogOut}
                  className="btn p-1 text-[12px] md:text-[17px] md:p-4 bg-[#378CE7] hover:bg-[#1181f8] text-[#ecf0f1]">Logout</button>
          </div>
          </>
            :
            <Link to='/login'>
              <button className="btn  bg-[#378CE7] hover:bg-[#1181f8] text-[#ecf0f1]">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;