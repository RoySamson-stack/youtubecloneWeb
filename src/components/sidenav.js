import { NavLink } from 'react-router-dom';


export default function SideNav() {
   return (
      <aside className="left-0">
         <div className="">
      <nav className="absolute z-10 w-48 bg-white-500 text-gray-700 min-h-screen border-b border-gray-700">
               <ul class="mt-8">
                  <li>
                     <a href="" className="px-4 py-2 hover:bg-gray-200">
                     Home
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </aside>
      )
}