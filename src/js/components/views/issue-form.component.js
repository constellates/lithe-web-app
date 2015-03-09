var React = require('react');
var request = require('superagent');
var Text = require('../forms/text.component');
var TextArea = require('../forms/textarea.component');
var Password = require('../forms/password.component');
var LoadButton = require('../forms/load-button.component.js');
var Router = require('react-router');

var IssueCard = React.createClass({
	mixins: [Router.Navigation, Router.State],
	propTypes: {
		name: React.PropTypes.string
	},
	getInitialState: function() {
    	return {
    		title: '',
    		status: '',
    		body: '',
    		tags: ''
    	};
    },
	_textChange: function (event) {
		var a = {};
		a[event.target.name] = event.target.value;
		this.setState(a);
	},
	//_statusChange: function (event) {
	//	this.setState({status: event.target.value});
	//},
	componentDidMount: function () {
		var issueId = this.getParams().id;
		var self = this;
		if (issueId) {
			var url = 'http://constellates.com:8888/issue/' + issueId;
			request
				.get(url)
				.end(function (err, res) {
					self.setState(res.body);
				});
		}
	},
	render: function () {
		var state = this.state;
		var buttonText = this.getParams().id ? 'save' : 'create';
		return (
			<div className="card">
    			<form>
    				<Text placeholder="title" name="title" value={state.title} onChange={this._textChange} />
    				<Text placeholder="status" name="status" value={state.status} onChange={this._textChange} />
    				<TextArea placeholder="body" name="body" value={state.body} onChange={this._textChange} />
    				<Text placeholder="tags" name="tags" value={state.tags} onChange={this._textChange} />
		    		<LoadButton onClick={this.handleSubmit} text={buttonText} />
    			</form>
    			<div className="title">lithe</div>
    		</div>
    	);
	},
	handleSubmit: function () {
		var state = this.state;
		var url = 'http://constellates.com:8888/issue';
		var self = this;
		var issueId = this.getParams().id;
		if (issueId) {
			url = url + '/' + issueId;
			request
				.put(url)
				.send(state)
				.end(function (err, res) {
					self.transitionTo('issues')
				});
		} else {
			request
				.post(url)
				.send(state)
				.end(function (err, res) {
					self.transitionTo('issues')
				});
		}

	}
});

module.exports = IssueCard;