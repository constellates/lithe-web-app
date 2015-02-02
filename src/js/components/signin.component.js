var React = require('react');
var request = require('superagent');

var SignInCard = React.createClass({
	render: function () {
		return (
			<div className="card">
    			<form>
    				<div className="form-group">
    					<label>username</label>
    					<input type="text" placeholder="username" />
    				</div>
    				<div className="form-group">
    					<label>password</label>
    					<input type="password" placeholder="password" />
    				</div>
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