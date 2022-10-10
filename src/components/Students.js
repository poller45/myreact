import "./Students.css";

const markEx =
	"https://ru.seaicons.com/wp-content/uploads/2015/09/Death-Star-icon.png";

const markEf =
	"https://st3.depositphotos.com/2934765/36015/v/450/depositphotos_360150352-stock-illustration-fail-stamp-vector-texture-rubber.jpg";

const markValue = 80;

function Student({ index, name, img, homeworks }) {
	const total = homeworks.reduce((a, b) => a + b, 0);

	function mark() {
		if (total / homeworks.length >= markValue) {
			return markEx;
		}
		return markEf;
	}

	return (
		<tr>
			<td>{index}</td>
			<td>
				<img className="avatar" alt="" src={img}></img>

				<span className="name">{name}</span>
			</td>
			<td className="homework">
				{homeworks.length}/{total}
			</td>

			<td>
				<img className="mark" alt="mark" src={mark()}></img>
			</td>
		</tr>
	);
}

export default Student;
