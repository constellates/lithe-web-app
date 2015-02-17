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
	IssueList = require('./components/issue-list.component'),
	Home      = require('./components/home.component');

// parent view -----------------------------------------------------------

var App = React.createClass({
	render: function () {
		return (
			<div>
				<header>
					<ul>
						<li><Link to="home">home</Link></li>
						<li><Link to="signIn">sign in</Link></li>
						<li><Link to="issue">create issue</Link></li>
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
		<Route name="home" handler={Home}/>
		<Route name="signIn" handler={SignInCard}/>
		<Route name="issue" handler={IssueCard}/>
		<Route name="issues" handler={IssueList}/>
		<DefaultRoute handler={Home}/>
	</Route>
);

// render handler --------------------------------------------------------

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('main'));
});