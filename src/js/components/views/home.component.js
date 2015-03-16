var React = require('react');
var SignInForm = require('../forms/signin.component.js');

var Home = React.createClass({
	render: function () {
		return (
			<div className="home">
    			<img src={"assets/logo.svg"} />
    			<SignInForm />
    			<h1>{'Lithe'}</h1>
    		</div>
    	);
	},
	handleSubmit: function () {

	}
});

module.exports = Home;