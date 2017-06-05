var React = require('react');
var Thumbnail = require('../forms/thumbnail');

	module.exports  = React.createClass({
		render: function(){
			var list = this.props.ShattleData.map(function(shatleProps){
				console.log(shatleProps);
				return <Thumbnail {...shatleProps} />
			});
			return <div>
				{list}
				</div>
		}
	});