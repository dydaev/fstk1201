var React = require('react');
var ThumbnailList = require('./lists/thumbnail-list');

var options = {

	ShattleData: [
		{
			imageUrl: 'http://starwars.lv/sites/starwars/uploads/documents/images/starwars/nubian_10.jpg',
			header: 'КОРОЛЕВСКИЙ ЗВЕЗДОЛЁТ',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			title: 'I to have thet`s now)',
			number: 1
		},{
			imageUrl: 'https://www.kinonews.ru/insimgs/persimg/persimg42273_7.jpg',
			header: 'Тысячелетний сокол',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
			title: 'I to have thet`s now)',
			number: 2
		}
]};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.body);