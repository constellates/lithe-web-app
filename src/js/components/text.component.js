var React = require('react');

var Text = React.createClass({
	getInitialState: function() {
    	return {
    		value: '',
    		showLabel: false
    	};
    },
	render: function () {
		var value = this.state.value;
		return (
			<div className="form-group">
				{ this.state.showLabel ? <label>username</label> : null }
				<input type="text" placeholder="username" value={value} onChange={this.handleChange} />
			</div>
		);
	},
	handleChange: function (event) {
		this.setState({value: event.target.value});
		if (event.target.value.length > 0) {
			this.setState({showLabel: true});
		} else {
			this.setState({showLabel: false});
		}
	}
});

module.exports = Text;