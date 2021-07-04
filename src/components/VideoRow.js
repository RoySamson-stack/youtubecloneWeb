import React from 'react'

function VideoRow({ views,
	 subs, 
	description,
	 timeStamp,
	 channel, 
	title,
	 image}) {
return (
	<div className="flex">
		<img src={image} alt=""  className="mt-8 object-contain"/>
		<div className="pl-6 mt-8">
			<h3 className="font-bold">{title}</h3>
			<p className="inline-flex text-gray-600 fomt-sm">{views} views . {timeStamp}</p>
			<h4 className="text-gray-600 font-sm">{channel}</h4>
			<p className="text-gray-600 font-sm">{description}</p>
		</div>
		</div>
)
}

export default VideoRow
