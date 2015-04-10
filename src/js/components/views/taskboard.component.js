var React = require('react');
var IssueList = require('./issue-list.component.js');
var IssueForm = require('./issue-form.component.js');

var TaskBoard = React.createClass({
	render: function () {
		var issueData = this.props.issueData;
		return (
			<div className="">
				<IssueList />
				<IssueForm />	
			</div>
		);
	}
});

module.exports = TaskBoard;