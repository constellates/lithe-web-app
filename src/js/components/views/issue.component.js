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
					<span>status: {issueData.status}</span>
					<p>{issueData.body}</p>
					<span>tags: {issueData.tags}</span>
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
	}

});

module.exports = Issue;