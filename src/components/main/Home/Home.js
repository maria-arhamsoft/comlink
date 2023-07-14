import React from 'react'
import Banner from './Banner.js/Banner'
import QuestionAnswer from './QuestionAnswer/QuestionAnswer';
import BestProviders from './BestProviders/BestProviders';
import SearchProvider from './SearchProvider/SearchProvider';
import Faqs from '../Common/Faqs/Faqs';

function Home() {
	return (
		<div className='homepg-wraper'>
			<Banner />
			<QuestionAnswer />
			<BestProviders />
			<SearchProvider/>
			<Faqs/>
		</div>
	)
}

export default Home
