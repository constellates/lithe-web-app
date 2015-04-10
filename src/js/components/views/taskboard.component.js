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
				<IssueList issues={issues} />
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
	}

});

module.exports = TaskBoard;