var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var HowItWorksSteps = new keystone.List('HowItWorksSteps', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

HowItWorksSteps.add({
	title: { type: String, required: true },
	featuredAsCard: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
    Image: { type: Types.CloudinaryImage },
	Content: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 400 },
    },
});

HowItWorksSteps.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

HowItWorksSteps.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
HowItWorksSteps.register();