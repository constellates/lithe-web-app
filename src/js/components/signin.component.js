var React = require('react');
var request = require('superagent');
var Text = require('./text.component');
var Password = require('./password.component');

var SignInCard = React.createClass({
	render: function () {
		return (
			<div className="card">
    			<form>
    				<Text />
    				<Password />
    				<div className="form-group">
		    			<button type="button" onClick={this.handleSubmit}>Sign In</button>
		    		</div>
    			</form>


    			<div className="spinner">
					<div className="double-bounce1"></div>
					<div className="double-bounce2"></div>
				</div>

    			<div className="title">lithe</div>
    		</div>
    	);
	},
	handleSubmit: function () {
		var url = 'http://www.reddit.com/.json';
		request.get(url, function (res) {
			console.log(res);
		});
	}
});

module.exports = SignInCard;