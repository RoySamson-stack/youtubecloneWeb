import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/icons/AccountBox"
import Mic from "@material-ui/icons/Mic"

function Header() {
  return (
    <div className="inline-flex fixed mt-6">
      <div className="flex  ml-6 left-0">
      <MenuIcon className=""/>
      <img src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-5.png"
        className=" pl-3 h-10 lg:w-26 md:h-10 md:w-20"
        />
      </div>
      <div className="inline-flex">
        <input type="text"
          placeholder="Search"
          className="border-2 pl-2 border-gray-900 lg:w-96 md:ml-24 lg:ml-80 pr-2" />
        <button className="bg-gray-200 w-14 hover:bg-gray-400">
          <SearchIcon />
          
        </button>
        <Mic className="mt-2 ml-6"/>
      </div>
      <div className="flex flex-wrap justify-right md:space-x-6 lg:space-x-8 sm:pl-8 md:pl-16 lg:pl-96 lg:items-right">
      <VideoCallIcon />
      <AppsIcon />
      <NotificationIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
