var React = require('react');
var request = require('superagent');
var Issue = require('./issue.component.js');

var IssueList = React.createClass({
	getInitialState: function() {
    	return {
    		issues: []
    	};
    },
    componentDidMount: function () {
    	this._getIssues();
    },
	render: function () {
		var issues = this.state.issues;
		var issueNodes = issues.map(function (issue, index) {
			return (
				<Issue key={index} issueData={issue} />
			)
		})
		return (
			<div className="card">
    			{issueNodes}
    		</div>
    	);
	},
	_getIssues: function () {
		var url = 'http://www.constellates.com:8888/issue';
		var self = this;
		request.get(url, function (res) {
			self.setState({issues: res.body.reverse()});
		});
	}
});

module.exports = IssueList;