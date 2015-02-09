var React = require('react');
var request = require('superagent');
var LoadButton = require('./load-button.component.js');

var IssueList = React.createClass({
	render: function () {
		var issues = this.props.issues;
		return (
			<div className="card">
    			<form>
		    		<button onClick={this.loadIssues}>load Issues</button>
    			</form>
    			<pre>{issues}</pre>
    			<div className="title">lithe</div>
    		</div>
    	);
	},
	loadIssues: function () {
		console.log('here');
		var url = 'http://www.constellates.com:8888/issue';
		var self = this;
		request.get(url, function (res) {
			self.props.issues = res.body;
			console.log(res);
		});
	}
});

module.exports = IssueList;