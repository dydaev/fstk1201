var React = require('react');

module.exports  = React.createClass({
	getInitialState: function(){
    	return {
    		buttonClass: true,
    		handleClick: this.handleClick.bind(this)
    	}
  	},
	handleClick: function() {
		this.setState(prevState => ({
			buttonClass: !prevState.buttonClass
		}));
	},
	render: function() {

		return (
			<button
				className={this.state.buttonClass ? 'btn btn-success' : 'btn btn-danger'}
				onClick={this.handleClick}
				type="button">
				{this.props.title}
			</button>
		);
	}
});