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
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	},
	render: function () {
		var props = this.props;
		var placeholder = this.props.placeholder;
		var name = this.props.name;
		return (
			<div className="form-group">
				{ props.value.length > 0 ? <label>{placeholder}</label> : null }
				<textarea name={name} placeholder={placeholder} value={props.value} onChange={this._handleChange} />
			</div>
		);
	}
});

module.exports = TextArea;