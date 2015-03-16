var React = require('react');
var request = require('superagent');
var Text = require('../forms/text.component');
var Password = require('../forms/password.component');
var LoadButton = require('../forms/load-button.component.js');

var SignInForm = React.createClass({
	render: function () {
		return (
			<form>
				<Text placeholder="username" />
				<Password placeholder="password" />
	    		<LoadButton text="sign in" />
			</form>
    	);
	}
});

module.exports = SignInForm;