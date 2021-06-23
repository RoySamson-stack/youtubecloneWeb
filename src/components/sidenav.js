import { NavLink } from 'react-router-dom';
import {useState } from 'react'



export default function SideNav() {

   const [sidebar, setSidebar] = useState(false)

   const showSidebar = () => setSidebar(!sidebar)
   return (
      <nav className="relative min-h-screen fixed w-64 flex" onClick={showSidebar} id="navbarCollapse">
         <div className="w-64 text-black" >
            <div className="inline-flex h-10">
               <button className="ml-2 mt-3"  id="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 "  viewBox="0 0 20 20" fill="currentColor" >
                     <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
               </button>
               <img src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-5.png"
                  className="mt-3 ml-4"
               />
            </div>
            <ul className="mt-6">
               <hr className=""/>
               <li className="navbar-item ">
                  <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 bold mr-6 text-black hover:bg-gray-400 text-decoration:none"
                  >Home</NavLink>
               </li>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >Explore</NavLink>
               </li>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >Subscription</NavLink>
               </li>
               <hr/>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >Library</NavLink>
               </li>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >History</NavLink>
                  
               </li>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >Your videos</NavLink>
               
               </li>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >Watch later</NavLink>
               
               </li>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >Liked Videos</NavLink>
               
               </li>
               <li className="navbar-item">
                 <NavLink
                     exact
                     to="/"
                     className="items-center mb-6 pr-2 pl-12 mr-6 text-black hover:bg-gray-400"
                  >Show more</NavLink>
                  
               </li>
            </ul>
         </div>
      </nav>
   )
}