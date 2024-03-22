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

	const data = [
		{
			title: 'Высадка семян на рассаду',
			date: new Date(),
			text: 'Сегодня я начала делать посадки семян на рассаду. Поскольку уже настали благоприятные дни.'
		},
		{
			title: 'Пикировка томатов',
			date: new Date(),
			text: 'Как правильно выполнять пикирование томатов.'
		}
	];

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							date={data[0].date}
							text={data[0].text}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm/>
			</Body>
		</div>
	);
}

export default App;
