var React = require('react');
var request = require('superagent');
var Text = require('../forms/text.component');
var Password = require('../forms/password.component');
var LoadButton = require('../forms/load-button.component.js');

var Home = React.createClass({
	render: function () {
		return (
			<div className="home">
    			<img src={"assets/logo.svg"} />
    			<h1>{'Lithe'}</h1>
    		</div>
    	);
	},
	handleSubmit: function () {
		var url = 'http://www.reddit.com/.json';
		request.get(url, function (res) {
			console.log(res);
		});
	}
});

module.exports = Home;