import React from "react"
import "./styles.css"
import {Cocktail} from "./interfaces/Interfaces"
import {getIngredients} from "./functions/drinkFunctions"

interface DrinkViewProps {
	cocktail: Cocktail;
}

const DrinkView = ({cocktail}: DrinkViewProps) => {
	const ingredients = getIngredients(cocktail)
	return (
		<div className="DrinkView">
			<h2> {cocktail.strDrink} </h2>
			<img src={cocktail.strDrinkThumb} style={{width: "100px", height: "100px", borderRadius: "50%"}} />
			<h2>Ingredients:</h2>
			<table style={{width: "40%", textAlign: "left"}}>
				<tbody>
					<tr>
						<th>Ingredient</th>
						<th>Amount</th>
					</tr>
					{ingredients.map((part, i) =>
						<tr key={i}>
							<td>
								{part.ingredient}
							</td>
							<td>
								{part.measurement}
							</td>
						</tr>
					)}
				</tbody>

			</table>
			<h2>Instructions:</h2>
			<p> {cocktail.strInstructions} </p>
		</div>
	)
}

export default DrinkView