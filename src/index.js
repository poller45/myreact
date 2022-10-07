import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const users = [
	{
		name: "Stormtroopers",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS9cfCpdPIjYNZruJG2qbemqjAPo4RwFr6g&usqp=CAU",
		homeworks: [100, 50, 80, 100, 85],
	},
	{
		name: "Master Yoda",
		img: "https://cdn.pixabay.com/photo/2015/09/04/18/55/yoda-922520__340.png",
		homeworks: [100, 110, 200, 100, 800, 100, 100, 100],
	},
	{
		name: "Darth Vader",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZKYUE3x_fLeQmZ9rqsmQpxBF12vfERkTdsAC1goNvp5FZRGyp1ZtcSiLvXpTbOT2K4k&usqp=CAU",
		homeworks: [100, 50, 80, 100, 85, 44, 89, 44, 44],
	},

	{
		name: "Some Stormtroopers",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS9cfCpdPIjYNZruJG2qbemqjAPo4RwFr6g&usqp=CAU",
		homeworks: [100, 80, 100, 85, 55, 90],
	},
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App users={users} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
