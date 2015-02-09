// dependencies ----------------------------------------------------------

var React        = require('react');
	Router       = require('react-router'),
	DefaultRoute = Router.DefaultRoute,
	Link         = Router.Link,
	Route        = Router.Route,
	RouteHandler = Router.RouteHandler;

// components ------------------------------------------------------------

var SignInCard = require('./components/signin.component'),
	IssueCard = require('./components/issue-form.component'),
	IssueList = require('./components/issue-list.component');

// parent view -----------------------------------------------------------

var App = React.createClass({
	render: function () {
		return (
			<div>
				<header>
					<ul>
						<li><Link to="inbox">sign in</Link></li>
						<li><Link to="calendar">create issue</Link></li>
						<li><Link to="issues">issues</Link></li>
					</ul>
				</header>

				<RouteHandler/>
			</div>
		)
	}
});

// routes ----------------------------------------------------------------

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="inbox" handler={SignInCard}/>
		<Route name="calendar" handler={IssueCard}/>
		<Route name="issues" handler={IssueList}/>
		<DefaultRoute handler={SignInCard}/>
	</Route>
);

// render handler --------------------------------------------------------

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('main'));
});