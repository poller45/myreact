import Student from "./components/Students";
import { USERS } from "./Data";

function App({ USERS }) {
	return (
		<div className="app">
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
				{USERS.sort(
					(a, b) =>
						b.homeworks.reduce((a, b) => a + b) -
						a.homeworks.reduce((a, b) => a + b)
				).map((item, i) => (
					<Student
						index={i + 1}
						name={item.name}
						img={item.img}
						homeworks={item.homeworks}
						homeworksDone={item.homeworksDone}
					/>
				))}
			</table>
		</div>
	);
}

export default App;
