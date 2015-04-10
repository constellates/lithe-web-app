var React = require('react');
var request = require('superagent');
var Issue = require('./issue.component.js');

var IssueList = React.createClass({

// life cycle events -------------------------------------------------------------------------------

	render: function () {
		var self = this;
		var issues = this.props.issues;
		var issueNodes = issues.map(function (issue, index) {
			return (
				<Issue key={index} issueData={issue}  deleteIssue={self._deleteIssue}/>
			)
		})
		return (
			<div className="issue-list">
    			{issueNodes}
    		</div>
    	);
	},

// custom methods ----------------------------------------------------------------------------------
	_deleteIssue: function (id) {
		this.props.deleteIssue(id);
	}
});

module.exports = IssueList;