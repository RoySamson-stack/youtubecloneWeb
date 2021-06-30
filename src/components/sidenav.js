import React from 'react'
import SidebarRow from './sidebarrow'
import HomeIcon from "@material-ui/icons/Home"
import Explore from "@material-ui/icons/Explore"
import Subscriptions from "@material-ui/icons/Subscriptions"
import VideoLibrary from "@material-ui/icons/VideoLibrary"
import History from "@material-ui/icons/History"
import ThumbUp from "@material-ui/icons/ThumbUp"
import WatchLater from "@material-ui/icons/WatchLater"
import ExpandMore from "@material-ui/icons/ExpandMore"
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

function sidenav() {
	return (
		<div className="side mt-6">
			<SidebarRow Icon={HomeIcon} title="Home" />
			<SidebarRow Icon={Explore} title="Explore" />
			<SidebarRow Icon={Subscriptions} title="Subscriptions" />
			<hr className=" bg-gray-400 mt-2 mb-2" />
			<SidebarRow Icon={VideoLibrary} title="Library" />
			<SidebarRow Icon={History} title="History" />
			<SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
			<SidebarRow Icon={WatchLater} title="Watch later" />
			<SidebarRow Icon={ThumbUp} title="Liked Videos" />
			<SidebarRow Icon={ExpandMore} title="Show more" />
			<hr />
		</div>
	)
}

export default sidenav
