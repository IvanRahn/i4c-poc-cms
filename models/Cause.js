var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Cause = new keystone.List('Causes', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Cause.add({
	title: { type: String, required: true },
	featuredAsCard: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
	hidden: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
    cardImage: { type: Types.CloudinaryImage },
	cardContent: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    pageImage: { type: Types.CloudinaryImage },
    pageContent: {
		heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 400 },
    },
});

Cause.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Cause.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Cause.register();