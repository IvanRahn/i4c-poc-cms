var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var About = new keystone.List('AboutVolunteerSection', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

About.add({
	title: { type: String, required: true },
	featured: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
    Card: {
        pageImage: { type: Types.CloudinaryImage },
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Text, wysiwyg: true, height: 400 },
    },
});

About.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

About.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
About.register();