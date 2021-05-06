import React from "react"

const Home = () =>
	<div className="pageContainer">
		<div className="Banner" >
			<div className="logoContainer" >
				<img src="Media/logo.png" style={{width: "100px", height: "100px"}} />
			</div>
		</div>
		<div className="contentContainer homeContent"style={{backgroundImage:"url(Media/back.svg)",backgroundSize:"cover"}}>
		<h1 className="title homeTitle"style={{margin:"20px",maxWidth:"700px",textAlign:"center"}}>
			A Free Web Application For Making Drinks At Home
</h1>
		<h4 style={{marginTop:"20px",textAlign:"center"}}>
			(But mainly just Typescript practice)
</h4>
<button className="pillButton homeButton">Let me in!</button>
</div>
	</div>

export default Home
