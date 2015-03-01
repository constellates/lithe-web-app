var React = require('react');
var request = require('superagent');
var Text = require('./text.component');
var Password = require('./password.component');
var LoadButton = require('./load-button.component.js');

var IssueCard = React.createClass({
	_textChange: function (event) {
		console.log(event.target);
		var a = {};
		a[event.target.name] = event.target.value;
		this.setState(a);
	},
	//_statusChange: function (event) {
	//	this.setState({status: event.target.value});
	//},
	render: function () {
		var state = this.state;
		var name = this.props.name;
		return (
			<div className="card">
    			<form>
    				<Text placeholder="title" name="title" onChange={this._textChange} />
    				<Text placeholder="status" name="status" onChange={this._textChange} />
    				<Text placeholder="body" name="body" onChange={this._textChange} />
    				<Text placeholder="tags" name="tags" onChange={this._textChange} />
    				<Password placeholder="password" />
		    		<LoadButton onClick={this.handleSubmit} text="create issue" />
    			</form>
    			<div className="title">lithe</div>
    		</div>
    	);
	},
	handleSubmit: function () {
		console.log(this.state);
		//var url = 'http://www.reddit.com/.json';
		//request.get(url, function (res) {
		//	console.log(res);
		//});
	}
});

module.exports = IssueCard;