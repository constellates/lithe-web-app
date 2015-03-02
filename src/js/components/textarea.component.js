var React = require('react');

var TextArea = React.createClass({
	propTypes: {
		name: React.PropTypes.string
	},
	getInitialState: function() {
    	return {
    		value: '',
    		showLabel: false
    	};
    },
	_handleChange: function (event) {
		this.setState({value: event.target.value});
		//
		if (event.target.value.length > 0) {
			this.setState({showLabel: true});
		} else {
			this.setState({showLabel: false});
		}

		if (this.props.onChange) {
			this.props.onChange(event);
		}

	},
	render: function () {
		var value = this.state.value;
		var placeholder = this.props.placeholder;
		var name = this.props.name;
		return (
			<div className="form-group">
				{ this.state.showLabel ? <label>{placeholder}</label> : null }
				<textarea name={name} placeholder={placeholder} value={value} onChange={this._handleChange} />
			</div>
		);
	}
});

module.exports = TextArea;