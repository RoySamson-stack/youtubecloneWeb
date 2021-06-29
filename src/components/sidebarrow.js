import React from 'react'

export default function SidebarRow({ Icon, title }) {
   return (
      <div className="flex items-center">
         <Icon/>
         <h1>{title}</h1>
      </div>
   )
}

