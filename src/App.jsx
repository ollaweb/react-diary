import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {

	const INITIAL_POSTS = [
		{
			id:1,
			title: 'Высадка семян на рассаду',
			date: new Date(),
			tag: 'Огород',
			text: 'Сегодня я начала делать посадки семян на рассаду. Поскольку уже настали благоприятные дни.'
		},
		{
			id:2,
			title: 'Пикировка томатов',
			date: new Date(),
			tag: 'Огород',
			text: 'Как правильно выполнять пикирование томатов.'
		}
	];

	const [posts, setPosts] = useState(INITIAL_POSTS);

	function addPost(post) {
		setPosts(oldPosts => [...oldPosts, {
			id: Math.max(...oldPosts.map(p => p.id)) + 1,
			title: post.title,
			date: new Date(post.date),
			tag: post.tag,
			text: post.text
		}]);
	}

	const sortPosts = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{posts.sort(sortPosts).map(el => (
						<CardButton key={el.id}>
							<JournalItem
								title={el.title}
								date={el.date}
								text={el.text}
							/>
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addPost}/>
			</Body>
		</div>
	);
}

export default App;
