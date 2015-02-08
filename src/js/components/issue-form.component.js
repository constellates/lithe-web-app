var React = require('react');
var request = require('superagent');
var Text = require('./text.component');
var Password = require('./password.component');
var LoadButton = require('./load-button.component.js');

var IssueCard = React.createClass({
	render: function () {
		return (
			<div className="card">
    			<form>
    				<Text placeholder="title" />
    				<Text placeholder="status" />
    				<Text placeholder="body" />
    				<Text placeholder="tags" />
    				<Password placeholder="password" />
		    		<LoadButton text="create issue" />
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

module.exports = IssueCard;