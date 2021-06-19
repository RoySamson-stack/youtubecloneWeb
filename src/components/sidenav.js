import { NavLink } from 'react-router-dom';


export default function SideNav() {
   return (
      <nav className="navbar navbar-light fixed-top w-64">
         <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
         <span className="navbar-toggler-icon navbar-dark"></span>
         </button>
        
         <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto pt-4">
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