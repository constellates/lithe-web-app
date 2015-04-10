var React = require('react'),
	request = require('superagent');

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
						<button onClick={this._deleteDetail}>delete</button>
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

	_deleteDetail: function () {
		var url = 'http://www.constellates.com:8888/issue/' + this.props.issueData._id;
		console.log(url);
		request.del(url).end(function (err, res) {});
	}

});

module.exports = Issue;