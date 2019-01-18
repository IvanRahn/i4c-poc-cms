var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Card = new keystone.List('FeaturedCauseCard', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Card.add({
	title: { type: String, required: true },
	featured: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
	image: { type: Types.CloudinaryImage },
	content: {
		heading: { type: Types.Html, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Card.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Card.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Card.register();