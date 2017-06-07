var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<li className="contact" key="this.props.id">
				<a href={this.props.link}>
				<div className="contact-thumbnail">
					<img className="contact-img img-circle" width="80px" height="80px" src={this.props.img} />
					<div className="contact-info">
					<div className="contact-title">{this.props.name}</div>
					<div className="contact-number text-muted">{this.props.number}</div>
					</div>
				</div>
				</a>
				<div className="contact-line"></div>
			</li>
		);
	}
});