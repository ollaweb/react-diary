import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

function JournalList({posts}) {

	if (posts.length === 0) {
		return <p>Записей пока нет. Добавьте первую запись</p>;
	}

	const sortPosts = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<div className='journal-list'>{posts.sort(sortPosts).map(el => (
			<CardButton key={el.id}>
				<JournalItem
					title={el.title}
					date={el.date}
					text={el.text}
				/>
			</CardButton>
		))}</div>
	);
}

export default JournalList;
