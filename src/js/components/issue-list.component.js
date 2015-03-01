var React = require('react');
var request = require('superagent');
var LoadButton = require('./load-button.component.js');

var IssueList = React.createClass({
	getInitialState: function() {
    	return {
    		issues: []
    	};
    },
	render: function () {
		var issues = this.state.issues;
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
		var url = 'http://www.constellates.com:8888/issue';
		var self = this;
		request.get(url, function (res) {
			self.setState({issues: res.body});
		});
	}
});

module.exports = IssueList;