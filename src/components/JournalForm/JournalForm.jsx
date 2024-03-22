import { useState } from 'react';
import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm() {
	const {inputData, setInputData} = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const addJournalItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};


	return (
		<form action="" className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name='title'/>
			<input type="date" name="date"/>
			<input type="text" name='tag' value={inputData} onChange={inputChange}/>
			<textarea name="post" id="" cols="30" rows="10"></textarea>
			<Button text='Сохранить'></Button>
		</form>
	);
}

export default JournalForm;
