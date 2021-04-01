import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let mobileProjects = ["SecretGuide"];
let webProjects =[];
let gameProjects =["Jumgeon", "AL"];
let additionalProjects =["Patterns"];
//state to use to change view of projects when selected by nav
let state = "default";


function stateChange(s){
	if (state != s){
		state = s;
		console.log(state);
		//add refresh state 
	}
}


const MainNav = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return(
		
		<div id ="navContainer">
			<ul className ={click ? "nav-options active" : "nav-options"}>
				<li className ="option" onClick={closeMobileMenu}>
					<a onClick={(s) => stateChange('Mobile', s)}>Mobile</a>
				</li>
				<li className ="option" onClick={closeMobileMenu}>
					<a onClick={(s) => stateChange('Web', s)}>Web</a>
				</li>
				<li className ="option" onClick={closeMobileMenu}>
					<a onClick={(s) => stateChange('Game', s) }>Game</a>
				</li>
				<li className ="option" onClick={closeMobileMenu}>
					<a onClick={(s) => stateChange('Me', s)}>About Me</a>
				</li>
				<li className ="option" onClick={closeMobileMenu}>
					<a href="https://github.com/NathanKregstein">GitHub</a>
				</li>
				<li className ="option" onClick={closeMobileMenu}>
					<a href="https://www.linkedin.com/in/nathan-kregstein/">LinkedIn</a>
				</li>
			</ul>
		</div>
      
	);
};

const MyWork = () => {
	
	return (
		<div className="workContainer">
			<div className ="workContainerChild" id ="mobileProjContainer">
				<div className="imageWText">
      				<img className ="portImage" id="secretGuideTitleImage" src = "/secretguidetitle.png" alt="Secret Guide Project Title Image"></img>
    				<p className = "textOverlay">Multiplayer AR IOS App</p>
      			</div>
      			<div className="imageWText">
      				<img className ="portImage" id="ARDinosaursTitleImage" src = "/ARDinosaurs.png" alt="Secret Guide Project Title Image"></img>
    				<p className = "textOverlay">AR Experiment App Unity Based</p>
      			</div>
			
      			
			</div>
			<div className ="workContainerChild" id ="gameProjContainer">
				<div className="imageWText">
      				<img className ="portImage" src ="/alfinish2.jpeg" alt="hero shot of alternative controller"></img>
      				<p className = "textOverlay">Arduino based Alternative Controller</p>
      			</div>
      			<div className="imageWText">
      				<img className ="portImage" src ="/BendHeroShot.jpeg" alt="hero shot of alternative controller named Bend uses bendy straws as controller"></img>
      				<p className = "textOverlay">Arduino Based Alternative Controller and React Game</p>
      			</div>
			</div>
			<div className ="workContainerChild" id ="webProjContainer">
				{webProjects.map((value, index) => {
        			return <h2 key={index}>{value}</h2>
      			})}
			</div>
		</div>
		);

}

const AboutMe = () => {
	return(
		<div className = "aboutMeSection">
			<img id ="selfie" src = "/selfie.jpg"></img>
			<h1>Nathan Kregstein</h1>
			<h2>Application & Software Developer</h2>
			<p> I am a creatively driven developer with experience in mobile, web and game development.  I have a passion for problem-solving, design, coding, and learning.</p>
	 	</div>
		);
}

export default function App(){
	if (state != "Me"){
	return(
		<div className="page">
			<MainNav />
			<div className ="content">
				<AboutMe />
				<MyWork />
			</div>
		</div>
		);
	
	}
	else{
		return(
		<div className="page">
			<MainNav />
			<div className ="content">
				<AboutMe />
				<MyWork />
			</div>
		</div>
		);
	}
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);



// removed may add again
// {gameProjects.map((value, index) => {
//         			return <h2 key={index}>{value}</h2>
//       			})}
// {mobileProjects.map((value, index) => {
//         			return <div><h2 key={index}>{value}</h2><p>IOS Based App</p></div>

//       			})}