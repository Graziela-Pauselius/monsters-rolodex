// import { Component } from "react";
import Cards from "../cards/cards.components";
import "./card-list.styles.css";

//Function Component
const CardList = ({ monsters }) => (
	<div className="card-list">
		{monsters.map((monster) => {
			return <Cards monster={monster} />;
		})}
	</div>
);

export default CardList;

// Class Component

// class CardList extends Component {
// 	render() {
// 		const { monsters } = this.props;

// 		return (
// 			<div className="card-list">
// 				{monsters.map((monster) => {
// 					return <Cards monster={monster} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

// export default CardList;
