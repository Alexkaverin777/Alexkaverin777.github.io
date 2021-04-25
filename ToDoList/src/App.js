import React, {useState,Fragment, useEffect} from 'react';
import ToDoItem from "./components/ToDoItem/ToDoItem";
import todoData from "./todoData";

function App() {
	let dataLocal = JSON.parse(localStorage.getItem('dataLocal')) || todoData;
	const [posts, setPosts] = useState(dataLocal);
	//получение значение инпуты
	const [valueInput, setValueInput] = useState('');

	useEffect(() => {
		if (!posts.length) {
			setPosts(todoData);
		}
	}, [posts]);

	const addPost = (e) => {
		e.preventDefault();
		if (!valueInput) {
			alert("Поле должно быть заполнено");
			return
		}
		const randomNumber = Math.floor(Math.random() * 1000000);
		const newPost = {
			id: randomNumber,
			text: valueInput,
			completed: false,
		};
		setPosts([...posts, newPost]);
		setValueInput('');

		dataLocal.push(newPost);
		setItemLocal(dataLocal)
	};

	const removeItem = id => {
		const resalt = posts.filter(el => el.id !== id);
		setPosts(resalt);
		setItemLocal('Resalt ', resalt)
	};

	const handleChange = id => {
		const resalt = posts.map(item => {
			if (item.id === id) {
				return {...item, completed: !item.completed}
			} else {
				return item
			}
		});
		setPosts(resalt);
		setItemLocal(resalt)

	};
	const setItemLocal = arr => {
		localStorage.setItem('dataLocal', JSON.stringify(arr))
	};

	const activeTasks = posts.filter(task => task.completed === false);
	const completedTasks = posts.filter(task => task.completed === true);
	const finalTask = [...activeTasks, ...completedTasks].map(post => {
		return (
			<ToDoItem
				key={post.id}
				text={post.text}
				checked={post.completed}
				handleChange={() => handleChange(post.id)}
				removeitem={() => removeItem(post.id)}

			/>
		)
	});

	return (
		<Fragment>
			<header className='header'>
				<div className="toDoList">
					{finalTask}
					<form>
						<p className="form-text">Введите новую задачу &#11015;</p>
						<input type="text" placeholder='Max liters 30' className="newPost"
							   value={valueInput} onChange={e => setValueInput(e.target.value)} maxLength="30"/>
						<button type='submit' onClick={addPost} className="form-btn">Добавить пост</button>
					</form>
				</div>
			</header>
		</Fragment>
	)
}

export default App;
