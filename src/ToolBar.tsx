import React from "react"
import {Link} from "react-router-dom"
import AlphabetRow from "./AlphabetRow"

const Toolbar = () => { 

	return (
		<div  style={{width:"100%",height:"20vh"}}>
				<Link to="/filter">Interactive Search</Link>
				{/* TODO component with alphabet links */}
				<AlphabetRow />
		</div> 
	)
}


export default Toolbar