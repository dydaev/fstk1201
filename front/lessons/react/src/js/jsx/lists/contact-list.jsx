var React = require("react");
var Contact = require("../forms/thumbnail-contact");

module.exports = React.createClass({
	getInitialState: function(){
    	return {
    		contacts_list: this.props.contactList
    	}	
  	},
	handleSearch: function(event) {
		var searchQuery = event.target.value.toLowerCase();
		var dispayedContacts = this.props.contactList.filter(function(conts){
				var searchValue = conts.name.toLowerCase();
				return searchValue.indexOf(searchQuery) !== -1;
			});

		this.setState({
			contacts_list: dispayedContacts
		});
	},
	render: function() {
		var list = this.state.contacts_list.map(function(contact_props){
					return <Contact {...contact_props}/>
				});
		return (
			<div className="contacts">
				<input className="contact-input form-control" placeholder="Search" onChange={this.handleSearch} type="text"/>
				<ul className="contacts-list">
					{list}
				</ul>
			</div>
		);
	}
});