import React from 'react'
import Banner from './Banner.js/Banner'
import QuestionAnswer from './QuestionAnswer/QuestionAnswer';
import BestProviders from './BestProviders/BestProviders';
import SearchProvider from './SearchProvider/SearchProvider';

function Home() {
	return (
		<div>
			<Banner />
			<QuestionAnswer />
			<BestProviders />
			<SearchProvider/>
		</div>
	)
}

export default Home
