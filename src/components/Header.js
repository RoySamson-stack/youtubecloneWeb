import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCallIcon"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"

function Header() {
  return (
    <div className="header">
    <h1>Header</h1>
      <MenuIcon />
      <img src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-5.png"
        className="mt-3 ml-4"
      />
      <input type="text" className="border-2 border-gray-900"/>
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationIcon />
    </div>
  )
}

export default Header
