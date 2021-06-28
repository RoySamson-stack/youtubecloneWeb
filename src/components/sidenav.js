import React from 'react'
import SidebarRow from './sidebarrow'

function sidenav() {
   return (
         <div className="side">
         <h1>I ma a sidebar</h1>
         <SidebarRow title="Home" />
         <SidebarRow title=""/>
         <SidebarRow title=""/>
         <SidebarRow title=""/>
         // <SidebarRow />
         // <SidebarRow />

         </div>
   )
}

export default sidenav
