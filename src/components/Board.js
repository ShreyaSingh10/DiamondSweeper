import React from 'react';
import Square from './Square';
import './styles.css';

class Board extends React.Component {
	state ={
		diamondCounter: 0,
		squaresClickedCounter: 0,
		totalSquares: 9,
		totalDiamonds: 3,
		highScore: 0
	}

	componentDidMount() {
		let highScore = localStorage.getItem('highScore');
		if(highScore > this.state.highScore) {
			this.setState({
				highScore: JSON.parse(highScore)
			});
		}
	} 

	handleClick = (diamondVal, clicksCounter) => {
		if(this.state.totalSquares > this.state.squaresClickedCounter && this.state.diamondCounter <3) {
			let diamondCounter = this.state.diamondCounter;
			diamondCounter = diamondCounter + diamondVal;
			let squaresClickedCounter = this.state.squaresClickedCounter;
			squaresClickedCounter = squaresClickedCounter + clicksCounter;
			this.setState({diamondCounter, squaresClickedCounter},  this.updateHighScore);
		}
	}

	updateHighScore = () => {
		if(this.state.diamondCounter === 3){
			let highScore = this.state.totalSquares - this.state.squaresClickedCounter;
			let prevHighScore = localStorage.getItem('highScore');
			if(prevHighScore < highScore){ 
			localStorage.setItem('highScore', JSON.stringify(highScore));}
		}
	}

	render() {
		const { diamondCounter, squaresClickedCounter,
				totalDiamonds, totalSquares } = this.state;
		return(
			<div className="parent_container">
				<font face="Comic sans MS" size="6">
            		<h1 className="heading">Diamond Sweeper</h1>
          		</font>
				<div className="board">
					<div>
						<Square 
							handleClick={this.handleClick} 
							val= 'false'
							diamondCounter = {diamondCounter}
						/>
						<Square 
							handleClick={this.handleClick} 
							val= 'false'
							diamondCounter = {diamondCounter}
						/>
						<Square 
							handleClick={this.handleClick} 
							val="true"
							diamondCounter = {diamondCounter}
						/>
					</div>
					<div>
						<Square 
							handleClick={this.handleClick} 
							val= 'false'
							diamondCounter = {diamondCounter}
						/>
						<Square 
							handleClick={this.handleClick} 
							val="true"
							diamondCounter = {diamondCounter}
						/>
						<Square 
							handleClick={this.handleClick} 
							val= 'false'
							diamondCounter = {diamondCounter}
						/>
					</div>
					<div>
						<Square 
							handleClick={this.handleClick} 
							val="true"
							diamondCounter = {diamondCounter}
						/>
						<Square 
							handleClick={this.handleClick} 
							val= 'false'
							diamondCounter = {diamondCounter}
						/>
						<Square 
							handleClick={this.handleClick} 
							val= 'false'
							diamondCounter = {diamondCounter}
						/>
					</div>
				</div>
				<div>
					Last high score {this.state.highScore}
					{
						diamondCounter < totalDiamonds?
						(	
							<font face="Comic sans MS" size="4">
								<h4>You need to find {(totalDiamonds - diamondCounter)} diamonds</h4>
							</font>
						):
						(	
							<font face="Comic sans MS" size="5">
								<h3>Your Score is {totalSquares - squaresClickedCounter} </h3>
							</font>
						)
					}
				</div>
			</div>
		);
	}
}
export default Board;