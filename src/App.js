import "./App.css";
import Student from "./components/Students";

function App(props) {
	return (
		<div className="App">
			<table className="students" border="0">
				<caption>React students</caption>
				<tr>
					<th>
						<img
							alt=""
							src="https://cdn-icons-png.flaticon.com/512/2665/2665715.png"
							width="30"
							height="30"
						></img>
					</th>
					<th>Студент</th>
					<th>Домашки/балы</th>
					<th>
						<img
							alt=""
							src="https://cdn-icons-png.flaticon.com/512/15/15643.png"
							width="30"
							height="30"
						></img>
					</th>
				</tr>
				{props.users.map((item, index) => {
					return (
						<Student
							name={item.name}
							img={item.img}
							homeworks={item.homeworks}
						/>
					);
				})}
			</table>
		</div>
	);
}

export default App;
