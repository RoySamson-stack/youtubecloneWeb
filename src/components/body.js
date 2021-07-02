import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
	return (
			<div className="">
			<img className="" src={image} alt="" />
			<div className="inline-flex">
				<AccountCircleIcon
					className=""
					alt={channel}
					src={channelImage}
				/>
				<div>
					<h4 className="font-semibold">{title}</h4>
					<p className="font-semibold text-gray-400">{channel}</p>
				<p className="font-semibold text-gray-400">
					{views} . {timestamp}
					</p>
				</div>
			</div>
			</div>
	)
}

export default VideoCard
