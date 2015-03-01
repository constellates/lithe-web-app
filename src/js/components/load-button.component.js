var React = require('react');

var loadButton = React.createClass({
	getInitialState: function () {
		return {
			loading: false
		}
	},
	render: function () {
		var loading = this.state.loading;
		var text = this.props.text;
		return (
			<div className="form-group">
			{ loading != true ? <button onClick={this.signIn}>{text}</button> : null}
			{ loading ? <div className="spinner">
										<div className="double-bounce1"></div>
										<div className="double-bounce2"></div>
									</div> : null}
			</div>
		);
	},
	signIn: function () {
		this.props.onClick();
		this.setState({loading: true});
		var self = this;
		setTimeout(function() {
			self.setState({loading: false});
		}, 5000);
	}
});

module.exports = loadButton;