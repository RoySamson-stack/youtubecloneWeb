import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';

function SearchPage() {
	return (
		<div className="search bg-gray-100 p-6 mt-6">
			<div className="flex items-center text-gray-500 text-sm">
				<TuneIcon />
				<h2>FILTER</h2>
			</div>
			<hr className="mt-2 bg-gray-200"/>
		</div>
	)
}

export default SearchPage
