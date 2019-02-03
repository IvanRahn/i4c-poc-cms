var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var About = new keystone.List('AboutFirstSection', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

About.add({
	title: { type: String, required: true },
    image: { type: Types.CloudinaryImage },
	contentTop: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
        text: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    contentBottom: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
        text: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    link: {
        text: { type: Types.Text, wysiwyg: true, height: 400 },
        color: { type: Types.Text, wysiwyg: true, height: 150 },
        location: { type: Types.Text, wysiwyg: true, height: 150 },
    },
});

About.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

About.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
About.register();