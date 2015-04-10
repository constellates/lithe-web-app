var React = require('react');
var IssueList = require('./issue-list.component.js');
var IssueForm = require('./issue-form.component.js');
var request = require('superagent');

var TaskBoard = React.createClass({

// life cycle events -----------------------------------------------------------------------------

	getInitialState: function () {
    	return {
    		issues: []
    	};
    },
	componentDidMount: function () {
		this._getIssues();
	},
	render: function () {
		var issues = this.state.issues;
		return (
			<div className="backlog-manager">
				<IssueList issues={issues} deleteIssue={this._deleteIssue} />
			</div>
		);
	},

// custom methods --------------------------------------------------------------------------------

	_getIssues: function () {
		var url = 'http://www.constellates.com:8888/issue';
		var self = this;
		request.get(url, function (res) {
			self.setState({issues: res.body.reverse()});
		});
	},

	_deleteIssue: function (issueId) {
		var url = 'http://www.constellates.com:8888/issue/' + issueId;
		var self = this;
		request.del(url).end(function (err, res) {
			if (!err) {
				self.setState({
					issues: self.state.issues.filter(function (issue) {return issue._id != issueId})
				});
			}
		});
	}

});

module.exports = TaskBoard;