import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow(
{image, Channel, subs, noOfVids, description, verified}) {
	return (
				<div className="flex items-center">
			<img className=" ml-16 mt-6 h-36 w-36 rounded-full" alt={Channel} src={image} />
			<div className="">
				<h4 className="font-bold pl-2">{Channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
				<p className="text-gray-500 pl-2">{subs} subscribers . {noOfVids} videos</p>
				<p className="text-gray-500 pl-2">{description}</p>
			</div>
				</div>
	)
}

export default ChannelRow
