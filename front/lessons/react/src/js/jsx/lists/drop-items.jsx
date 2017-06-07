var React = require('react');

	module.exports  = React.createClass({
		hundleClick: function() {
			this.whenItemClicked(this.props.item);
		},
		render: function(){
			return
				<li className={this.props.className}>
					<a onclick={this.hundleClick}>{this.props.item}</a>
				</li>
		}
	});