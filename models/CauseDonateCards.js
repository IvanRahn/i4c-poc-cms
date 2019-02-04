var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Cause = new keystone.List('CauseDonateCard', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Cause.add({
	title: { type: String, required: true },
    featured: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
    image: { type: Types.CloudinaryImage },
    heading: { type: Types.Text, wysiwyg: true, height: 150 },
    text: { type: Types.Text, wysiwyg: true, height: 400 },
    
});

Cause.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Cause.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Cause.register();