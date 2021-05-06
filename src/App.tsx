import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Cocktail} from "./interfaces/Interfaces"
import {cocktailsByName, randomCocktail} from "./functions/drinkFunctions"
import Home from "./Home"
import Banner from "./ToolBar"
import DrinkView from "./DrinkView"

const App = () => {
	const [cocktailsToShow, setCocktailsToShow] = useState<null | Cocktail[]>(null)
	const [searchQuery, setSearchQuery] = useState<string>("")

	useEffect(() => {
		searchQuery && (async () => {setCocktailsToShow(await cocktailsByName(searchQuery))})()
	}
		, [searchQuery])

	return (
		<Router>
			<div className="PageContainer">
				<Route exact path="/">
					<Home/>
					</Route>
					<Route path="/drinks">
				<Banner />
					<div style={{display: "flex", flexWrap: "wrap", }} >
						{searchQuery && cocktailsToShow && cocktailsToShow.length > 1 &&
							cocktailsToShow.map((cocktail: Cocktail, i: number) =>
								<div key={i} onClick={() => {setCocktailsToShow([cocktail])}} style={{margin: "10px", display: "flex", flexDirection: "column"}}>
									<h2> {cocktail.strDrink} </h2>
									<img src={cocktail.strDrinkThumb} style={{width: "100px", height: "100px", borderRadius: "50%"}} />
								</div>
							)}
						{cocktailsToShow && cocktailsToShow.length == 1 &&
							<div className="ContentContainer">
								<DrinkView cocktail={cocktailsToShow[0]} />
							</div>
						}
						{/* If clicked on, add id to url and render page off of that. */}

					</div>
					<div style={{backgroundColor: "gray", display: "flex", justifyContent: "center"}}>
						<input onChange={(e) => {setSearchQuery(e.target.value)}} />
						<button onClick={async () => {setCocktailsToShow(await randomCocktail())}}> Surprise me</button>
					</div>
				</Route>
			</div>
		</Router>
	);
}

export default App;
