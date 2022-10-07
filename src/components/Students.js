import "./Students.css";

const markEx =
	"https://ru.seaicons.com/wp-content/uploads/2015/09/Death-Star-icon.png";
const markEf =
	"https://st3.depositphotos.com/2934765/36015/v/450/depositphotos_360150352-stock-illustration-fail-stamp-vector-texture-rubber.jpg";
const markValue = 80;
function Total(props) {
	let total = 0;

	props.homeworks.forEach(function (value, index) {
		total += +value;
	});
	return total;
}

function Mark(props) {
	if (Total(props) / props.homeworks.length >= markValue) {
		return markEx;
	}
	return markEf;
}

function counter() {
	let count = 0;
	return function () {
		return ++count;
	};
}

function Student(props) {
	return (
		<tr>
			<td>{counter()}</td>
			<td>
				<img className="avatar" alt="" src={props.img}></img>

				<span className="name">{props.name}</span>
			</td>
			<td>
				{props.homeworks.length}/{Total(props)}
			</td>

			<td>
				<img className="mark" alt="mark" src={Mark(props)}></img>
			</td>
		</tr>
	);
}

export default Student;
