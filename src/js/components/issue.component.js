var React = require('react');
var Router = require('react-router');

var Issue = React.createClass({
	mixin: [Router.Navigation],
	render: function () {
		var issueData = this.props.issueData;
		return (
			<div className="issue">
				<Link to="issueEdit" params={{id: issueData._id}}>
					<h2>{issueData.title}</h2>
					<h3>status: {issueData.status}</h3>
					<p>{issueData.body}</p>
					<span>tags: {issueData.tags}</span>
				</Link>
			</div>
		);
	}
});

module.exports = Issue;