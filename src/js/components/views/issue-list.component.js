var React = require('react');
var request = require('superagent');
var Issue = require('./issue.component.js');

var IssueList = React.createClass({
	getInitialState: function() {
    	return {
    		issues: []
    	};
    },
	render: function () {
		var issues = this.state.issues;
		var url = 'http://www.constellates.com:8888/issue';
		var self = this;
		request.get(url, function (res) {
			self.setState({issues: res.body.reverse()});
		});
		var issueNodes = issues.map(function (issue) {
			return (
				<Issue issueData={issue} />
			)
		})
		return (
			<div className="card">
    			{issueNodes}
    		</div>
    	);
	}
});

module.exports = IssueList;