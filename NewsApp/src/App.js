import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AllNews from "./components/AllNews/AllNews";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";
import {Route} from 'react-router-dom';
import Axios from "axios";

const useFetch = () => {
	const [data, updateData] = React.useState(null);
	const requestUrl = `${'http://newsapi.org/v2/top-headlines?'}${'country=us&'}${'apiKey=f2ecd509c3e0445abdedf006b3116a0b'}`
	useEffect(() => {
		const fetchData = async () => {
			const response = await Axios.get(requestUrl);
			updateData(response.data.articles);
		};
		fetchData()
	});
	return data
};

function App() {
	const data = useFetch();
	const [objNews, setObjNews] = React.useState('');

	const findsTheDesiredObject = (url) => {
		const elm = data.find((item) => item.url === url);
		setObjNews(elm);
	};
	return (
		<div className="container">
			<Header
				taxtLogo='Новостник'
			/>
			<Route
				path='/'
				exact
				render={() => (
					<Main
						funClickMe={findsTheDesiredObject}
						data={data}
						titleBlock="Всегда"
						titleSpan="свежие"
						titleSpanColor="новости"
						allNews="allNews"
						allNewsLink="Быть в курсе событий"
					/>
				)}
			/>
			<Route
				path='/allNews'
				exact
				render={() => (
					<AllNews
						funClickMe={findsTheDesiredObject}
						data={data}
						titleBlock="Быть"
						titleSpan="в курсе"
						titleSpanColor="событий"
					/>
				)}
			/>
			<Route
				exact
				path='/contact'
				component={Contact}
			/>
			<Route path='/news/:news'
				   render={() => (<News data={objNews}/>
				   )}
			/>
			<Footer/>
		</div>
	);
}

export default App;
