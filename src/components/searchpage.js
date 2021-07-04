import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
	return (
		<div className="search bg-gray-100 p-6 mt-6">
			<div className="flex items-center text-gray-500 text-sm">
				<TuneIcon />
				<h2>FILTER</h2>
			</div>
			<hr className="mt-2 bg-gray-200"/>
			<ChannelRow 
				image="https://yt3.ggpht.com/ytc/AKedOLQicZeRm7xzoCP2cZIAZ4wV_XSMgxStbJOUsrM8Ng=s68-c-k-c0x00ffffff-no-rj"
			Channel="David Dobrik"
				verified
				subs="14 M"
				noOfVids={ 1400 }
				description="We are here to make you laugh"
			/>
			<hr className="mt-6" />
			<VideoRow
				views="5.5M "
				// subs="14 M"
				description="I've always wanted to surpirse my friends with this!! New vlogs every Tuesday:) SUBSCRIBE TO JOE HE IS GREAT"
				timeStamp=""
				channel="David dobrik"
				title="SURPRISING FRIEND WITH LIFE CHANGING SURGERY!!.."
				image="https://i.ytimg.com/an_webp/6BAMFGFXLXY/mqdefault_6s.webp?du=3000&sqp=COTnhYcG&rs=AOn4CLCZ2o1Tiipd_pJXh0rncuLSd5gHRA"
			/>
			
		</div>
	)
}

export default SearchPage
