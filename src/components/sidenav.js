import React from 'react'
import SidebarRow from './sidebarrow'
import{ HomeIcon} from "@material-ui/icons/Home"
import {Explore} from "@material-ui/icons/Explore"
import {Subscriptions} from "@material-ui/icons/Subscriptions"

function sidenav() {
   return (
         <div className="side">
         <SidebarRow Icon={HomeIcon} title="Home" />
         <SidebarRow Icon={Explore} title="Explore"/>
         <SidebarRow Icon={Subscriptions} title="Subscriptions"/>
         <SidebarRow title=""/>
         {/*<SidebarRow / >
         <SidebarRow />*/}

         </div>
   )
}

export default sidenav
