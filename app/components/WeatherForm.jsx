var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var location = this.refs.location.value;

		if(location.length > 0 && typeof location === "string"){
			this.refs.location.value = "";
			this.props.onSearch(location);
		}

	},
	render: function() {
		return(
			<div className="text-center">
				<form onSubmit={this.onFormSubmit}>
					<input type="text" placeholder="Enter city name" ref="location"/>
					<button className="hollow button expanded" type="submit">Get Weather</button>
				</form>
			</div>

		);
	}
})


module.exports = WeatherForm;
