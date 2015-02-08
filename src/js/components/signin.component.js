var React = require('react');
var request = require('superagent');
var Text = require('./text.component');
var Password = require('./password.component');
var LoadButton = require('./load-button.component.js');

var SignInCard = React.createClass({
	render: function () {
		return (
			<div className="card">
    			<form>
    				<Text placeholder="username" />
    				<Password placeholder="password" />
		    		<LoadButton text="sign in" />
    			</form>
    			<div className="title">lithe</div>
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

module.exports = SignInCard;