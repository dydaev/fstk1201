var React = require('react');
var ThumbnailList = require('./lists/thumbnail-list');
var Dropdown = require('./dropdowns/dropdown#1');
var OrangButt = require('./buttons/orang-butt');
var Contact = require("./forms/thumbnail-contact");
var ContactList = require('./lists/contact-list');

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

options = {
	title: 'Choose your spice-shuttle',
	items: [
		'КОРОЛЕВСКИЙ ЗВЕЗДОЛЁТ',
		'Тысячелетний сокол'
	]

};
options = {
	contactList: [{
		key: "1",
		img: "./src/img/de.gif",
		name: "Dinulka hohotulka",
		number: "+380933332303",
		link: "#"
	},{
		key: "2",
		img: "http://24.media.tumblr.com/fd06797df0178271e7a5db9ac2df195e/tumblr_msz7sstgpR1r3sbdso7_r2_250.gif",
		name: "don Corleone",
		number: "+380672951732",
		link: "#"
	},{
		key: "3",
		img: "http://i.imgur.com/6cEwMo1.gif",
		name: "chuck norris",
		number: "+482133782211",
		link: "#"
	},{
		key: "4",
		img: "http://i.imgur.com/dxvmsJF.gif",
		name: "Marilyn Monroe",
		number: "+357563468568",
		link: "#"
	},{
		key: "5",
		img: "https://media.giphy.com/media/a6uBEDIJFVZi8/giphy.gif",
		name: "Alain Delon",
		number: "+4082346623566",
		link: "#"
	}]
};



var element = React.createElement(ContactList, options);

React.render(element,  document.querySelector('.container'));