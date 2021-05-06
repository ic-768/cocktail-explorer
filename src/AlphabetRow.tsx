import React from 'react'
import {Link} from "react-router-dom"

const AlphabetRow = () =>
	<div className="AlphabetRow"> 
		{
			Array.from(Array(26), (_, x) => String.fromCharCode(97 + x)) //create letter
			.map((letter) =>
				<Link to={letter} key={letter}> {/* Link for each letter */}
					{letter}
				</Link>
			)
		} 
	</div>
//1st argument->array of numbers, 2nd argument-> mapping function 


export default React.memo(AlphabetRow)