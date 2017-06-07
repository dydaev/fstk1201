var React = require('react');
var Badge = require('../buttons/bage');

	module.exports  = React.createClass({
		render: function() {
			return 	<div className="col-sm-6 col-md-4">
						<div className="thumbnail">
						<img className="img-thumbnail" src={this.props.imageUrl} alt="..."></img>
						<div className="caption">
							<h3 className="text-uppercase">{this.props.header}</h3>
							<p>{this.props.description}</p>
							<p>
								<Badge
									title={this.props.title}
									number={this.props.number}
								/>
							</p>
						</div>
						</div>
					</div>
				
		}
	});