import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'

function SearchPage() {
	return (
		<div className="search bg-gray-100 p-6 mt-6">
			<div className="flex items-center text-gray-500 text-sm">
				<TuneIcon />
				<h2>FILTER</h2>
			</div>
			<hr className="mt-2 bg-gray-200"/>
			<ChannelRow 
			image=""
			Channel="David Dobrik"
				verified=""
				subs="14 M"
				noOfVids={ 1400 }
				description="We are here to make you laugh"
			/>
		</div>
	)
}

export default SearchPage
