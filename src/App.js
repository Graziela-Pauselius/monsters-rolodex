// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// Function Component
const App = () => {
	console.log("render");
	//initialize the state
	const [searchField, setSearchField] = useState(""); // [value, setValue]
	const [monsters, setMonsters] = useState([]); //empty array
	const [filteredMonsters, setFilterMonsters] = useState(monsters);

	//Use effect to break the infinity loop of rending the api (side-effect)
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => setMonsters(users));
	}, []);

	//Use effect to isolate filterdMonster to fire only at monsters/searchFild changes
	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilterMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder="search monsters"
				className="monsters-search-box"
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// // Class Component
// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange = (e) => {
// 		const searchField = e.target.value.toLocaleLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		//to remove this.state
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="App">
// 				<h1 className="app-title">Monsters Rolodex</h1>
// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder="search monsters"
// 					className="search box"
// 				/>
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }
export default App;
