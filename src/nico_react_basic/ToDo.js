import { useState } from "react";

// 7.0 To DO List//

function ToDo() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		setToDos(current => [toDo, ...current]);
		setToDo("");
	}
	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="Write your to do"
					value={toDo}
					onChange={onChange}>
				</input>
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
			</ul>
		</div>
	)
}

export default ToDo;