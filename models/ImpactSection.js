var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Impact = new keystone.List('ImpactSection', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Impact.add({
	title: { type: String, required: true },
	featured: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
	image: { type: Types.CloudinaryImage },
	content: {
		heading: { type: Types.Html, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Impact.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Impact.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Impact.register();