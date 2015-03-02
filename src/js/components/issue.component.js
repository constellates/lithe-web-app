var React = require('react');

var Issue = React.createClass({
	render: function () {
		var issueData = this.props.issueData;
		return (
			<div className="issue">
				<h2>{issueData.title}</h2>
				<h3>status: {issueData.status}</h3>
				<p>{issueData.body}</p>
				<span>tags: {issueData.tags}</span>
			</div>
		);
	}
});

module.exports = Issue;