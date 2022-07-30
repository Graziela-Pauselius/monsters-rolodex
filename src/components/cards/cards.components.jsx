// import { Component } from "react";
import "./cards.styles.css";

// Function Component

const Cards = ({ monster }) => {
	const { id, name, email } = monster;
	return (
		<div className="card-container" key={id}>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

//Class Component

// class Cards extends Component {
// 	render() {
// 		const { id, name, email } = this.props.monster;
// 		return (
// 			<div className="card-container" key={id}>
// 				<img
// 					alt={`monster ${name}`}
// 					src={`https://robohash.org/${id}?set=set2&size=180x180`}
// 				/>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		);
// 	}
// }

export default Cards;
