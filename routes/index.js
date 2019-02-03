/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	app.all('/*', keystone.middleware.cors);
	// Views
	app.get('/', routes.views.index);
	app.get('/about/first-section', routes.views.aboutFirstSection);
	app.get('/about/second-section', routes.views.aboutSecondSection);
	app.get('/about/last-section', routes.views.aboutLastSection);
	app.get('/about/volunteer-section', routes.views.aboutVolunteerSection);
	app.get('/causes', routes.views.causes);
	app.get('/causes/homepage', routes.views.causeTopPage);
	app.get('/causes/homepage-card', routes.views.causeHomePageCard);
	app.get('/featured-cause-cards', routes.views.featuredcauses);
	app.get('/howitworkssteps', routes.views.steps);
	app.get('/howitworkshomepagecard', routes.views.HowCard);
	app.get('/howitworkshpfirstsection', routes.views.howitworkshpfirstsection);
	app.get('/impactsection', routes.views.impact);
	app.get('/our-team/our-promise', routes.views.ourteamOurPromise);
	app.get('/our-team/members',routes.views.ourteamMembers); 
	app.get('/our-team/find-out-more', routes.views.ourteamFindOutMore);
	app.get('/storycause', routes.views.storycause);
	app.get('/teamsection', routes.views.teamSection); 


	// make routes for the new models total new 2 - reuse our team

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
