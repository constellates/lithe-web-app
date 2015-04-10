var React = require('react');

var Issue = React.createClass({

// life cycle events -----------------------------------------------------------------

	getInitialState: function () {
		return {
			showDetails: false
		};
	},
	render: function () {
		var issueData = this.props.issueData;
		var details = '';
		if (this.state.showDetails) {
			details = (
				<div className="details">
					<div className="actions clearfix">
						<button>save</button>
						<button onClick={this._deleteIssue}>delete</button>
					</div>
					<div className="data">
						<span>status: {issueData.status}</span>
						<p>{issueData.body}</p>
						<span>tags: {issueData.tags}</span>
					</div>
				</div>
			);
		}
		return (
			<div className="issue">
				<div className="title-bar" onClick={this._toggleDetails}>{issueData.title}</div>
				{details}
			</div>
		);
	},

// custom methods --------------------------------------------------------------------

	_toggleDetails: function () {
		this.setState({showDetails: !this.state.showDetails});
	},

	_deleteIssue: function () {
		this.props.deleteIssue(this.props.issueData._id);
	}

});

module.exports = Issue;