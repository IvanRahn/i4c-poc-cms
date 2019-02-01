// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
var port = process.env.PORT 
if(process.env.PORT) {
keystone.init({
	'name': 'i4c-poc-cms',
	'brand': 'i4c-poc-cms',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'port': port
});
} else {
	keystone.init({
		'name': 'i4c-cms-atlas',
		'brand': 'i4c-cms-atlas',
	
		'less': 'public',
		'static': 'public',
		'favicon': 'public/favicon.ico',
		'views': 'templates/views',
		'view engine': 'pug',
	
		'auto update': true,
		'session': true,
		'auth': true,
		'user model': 'User',
	});
}
// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('./routes'));
keystone.set('cors allow origin', true);
keystone.get('cors allow methods', true);

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	users: 'users',
	HomePage: ['ImpactSection', 'TeamSection'],
	FeaturedCauseSection: 'FeaturedCauseCard',
	ImpactSection: "ImpactSection",
	About: ["AboutFirstSection", "AboutSecondSection", "AboutVolunteerSection", "AboutThirdSection"],
	HowItWorks: ["HowItWorksSteps","HomePageCard", "HomePageCardFirstSection"],
	Causes: ["causes", "StoryCause", "CauseHomePageCard"], 
	OurTeam: ["OurTeamOurPromise", "OurTeamMembers", "OurTeamFindOutMore"],
	// wrap boardmemebers: []
});

// Start Keystone to connect to your database and initialise the web server



keystone.start();
