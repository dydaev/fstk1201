var React = require('react');
var Button = require('../buttons/button-dropdown');
var ItemList = require('../lists/drop-items');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({
      open: !this.state.open
    });
  },
  getInitialState: function(){
    return {
      open: true,
      itemTitle: '',
    }
  },
  handleItemClick: function(item) {
    this.setState({
      open: false,
      itemTitle: item,
    });
  },
  render: function() {
    
    var list = this.props.items.map(function(item){
      return <ItemList
                item={item}
                whenItemClicked={this.handleItemClick}
                className={this.state.itemTitle === item ? "active" : "" }
              />
    }.bind(this))

    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-warning"
        title={this.state.itemTitle || this.props.title}
        subTitleClassName="$"
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>

        {list}
      </ul>
    </div>
  }
});
