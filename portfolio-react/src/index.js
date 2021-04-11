import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let mobileProjects = ["SecretGuide"];
let webProjects =[];
let gameProjects =["Jumgeon", "AL"];
let additionalProjects =["Patterns"];
//state to use to change view of projects when selected by nav
// let state = "default";


// function stateChange(s){
// 	if (state != s){
// 		state = s;
// 		console.log(state);
// 		//add refresh state 
// 		switch(s){
// 			case "Mobile":
// 				//render mobile projects only
// 				break;
// 			case "Web":
// 				//render web projects
// 				break;
// 			case "Game":
// 				//render just game projects
// 				break;
// 			case "Me":
// 				//render larger about me
// 				break;
// 			default:
// 				//render home page
// 				break;
// 		}
// 	}
// }


// Nav changes base page uses outside function stateChange(github and linkedin takes you to another page)
class MainNav extends React.Component{
	render(){
	return(
		
		<div id ="navContainer">
			<ul className = "nav-options active">
				<li className ="option">
					<a onClick = {(s) =>this.props.changeSection("mobile")} >Mobile</a>
				</li>
				<li className ="option">
					<a onClick= {(s) =>this.props.changeSection("web")}>Web</a>
				</li>
				<li className ="option">
					<a onClick= {(s) =>this.props.changeSection("game")}>Game</a>
				</li>
				<li className ="option">
					<a onClick= {(s) =>this.props.changeSection("me")}>About Me</a>
				</li>
				<li className ="option">
					<a href="https://github.com/NathanKregstein" target="_blank" rel="noopener noreferrer">GitHub</a>
				</li>
				<li className ="option">
					<a href="https://www.linkedin.com/in/nathan-kregstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
				</li>
			</ul>
		</div>
      
	);
}
};

class MyWork extends React.Component{
	render(){
		if(this.props.typeToDisplay == 'mobile'){
			return(
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
      			</div>
				);
		}
		else if(this.props.typeToDisplay == 'game'){
			return(
				<div className="workContainer">
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
      			</div>
				);
		}
		else{
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
}
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

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {section: "all"}
		this.changeSection =this.changeSection.bind(this);
	}
	changeSection(sect){
		var newSection = this.state.section;
		newSection = sect;
		this.setState({section: newSection});
		console.log(sect);

	}
	render(){
		if(this.state.section == 'all')
			return(
				<div className= 'page' >
					<MainNav changeSection ={this.changeSection}/>				
						<AboutMe />	
				</div>
			);

		else if (this.state.section == 'me'){
			return(
				<div className="page">
					<MainNav changeSection ={this.changeSection}/>
					<div className ="content">
						<AboutMe />
					</div>
				</div>
			);
		}
		else if (this.state.section == 'mobile'){
			return(
				<div className="page">
					<MainNav changeSection ={this.changeSection}/>
					<div className ="content">
						<MyWork typeToDisplay = 'mobile'/>
					</div>
				</div>
			);
		}
		else if (this.state.section == 'game'){
			return(
				<div className="page">
					<MainNav changeSection ={this.changeSection}/>
					<div className ="content">
						<MyWork typeToDisplay = 'game'/>
					</div>
				</div>
			);
		}
		else{
			return(
				<div className="page">
					<MainNav changeSection ={this.changeSection}/>
					<div className ="content">
						<AboutMe />
						<MyWork />
					</div>
				</div>
			);
		}

}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);



// removed may add again
{/*<ul className ={click ? "nav-options active" : "nav-options"}>*/}
/*<a onClick={(s) => stateChange('Mobile')}>Mobile</a>*/
// {gameProjects.map((value, index) => {
//         			return <h2 key={index}>{value}</h2>
//       			})}
// {mobileProjects.map((value, index) => {
//         			return <div><h2 key={index}>{value}</h2><p>IOS Based App</p></div>

//       			})}