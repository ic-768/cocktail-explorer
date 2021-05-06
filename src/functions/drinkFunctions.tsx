import {Ingredient, Cocktail, CocktailProperty} from "../interfaces/Interfaces"

export const getIngredients = (cocktail: Cocktail): Ingredient[] => {
	const ingredientsArray = Object.keys(cocktail).filter((key: string) =>
		key.includes('strIngredient') && cocktail[key as CocktailProperty]).map((key, i) => {
			return {ingredient: cocktail[key as CocktailProperty], measurement: cocktail[`strMeasure${i + 1}` as CocktailProperty]}; // Api data starts at 1
		});
	return ingredientsArray
}

export const cocktailsByName = async (query: string): Promise<Cocktail[]> => {
	const response = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)).json()
	console.log(response.drinks)
	return response.drinks
}

export const randomCocktail = async (): Promise<Cocktail[]> => {
	const response = await (await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")).json()
	console.log(response.drinks)
	return response.drinks
}