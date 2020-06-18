import React from 'react';
import './styles.css';

class Square extends React.Component {
	state ={
		diamondPresent: false,
		blank: false,
	}

	handleClick =() => {
		if(this.props.val === "true"){
			this.setState({diamondPresent : true});
			let diamonds = this.props.diamondCounter + 1;
			this.props.handleClick(1,1);
		}
		else{
			this.setState({blank : true});
			this.props.handleClick(0, 1);
		}
	}

	render() {
		return(
			<span className="square" onClick={this.handleClick}>
				{!this.state.diamondPresent && !this.state.blank ? 
				(<span className="square_questionmark">?</span>) : 
				(
					this.state.diamondPresent ? 
					(<span className="square_diamond">*</span>) : 
					(<span className="square_blank">/</span>)
				)}
			</span>
		);
	}
}

export default Square;