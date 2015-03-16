var React = require('react');
var request = require('superagent');
var Text = require('../forms/text.component');
var Password = require('../forms/password.component');
var LoadButton = require('../forms/load-button.component.js');
var Router = require('react-router');

var SignInForm = React.createClass({
	mixins: [Router.Navigation, Router.State],
	render: function () {
		return (
			<form>
				<Text placeholder="username" />
				<Password placeholder="password" />
	    		<LoadButton onClick={this.handleSubmit} text="sign in" />
			</form>
    	);
	},
	handleSubmit: function () {
		var self = this;
		setTimeout(function(){
			self.transitionTo('issues');
		}, 3000);
	}
});

module.exports = SignInForm;