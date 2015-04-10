var React = require('react');
var request = require('superagent');
var Issue = require('./issue.component.js');

var IssueList = React.createClass({
	render: function () {
		var issues = this.props.issues;
		var issueNodes = issues.map(function (issue, index) {
			return (
				<Issue key={index} issueData={issue} />
			)
		})
		return (
			<div className="issue-list">
    			{issueNodes}
    		</div>
    	);
	}
});

module.exports = IssueList;