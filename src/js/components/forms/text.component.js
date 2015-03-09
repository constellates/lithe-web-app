var React = require('react');

var Text = React.createClass({
	propTypes: {
		name: React.PropTypes.string
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
				{ props.value && props.value.length > 0 ? <label>{placeholder}</label> : null }
				<input type="text" name={name} placeholder={placeholder} value={props.value} onChange={this._handleChange} />
			</div>
		);
	}
});

module.exports = Text;