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
	featured: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
    Image: { type: Types.CloudinaryImage },
    Card: {
        pageImage: { type: Types.CloudinaryImage },
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Text, wysiwyg: true, height: 400 },
    },
	Content: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
        text: { type: Types.Text, wysiwyg: true, height: 400 },
        link: {
            text: { type: Types.Text, wysiwyg: true, height: 400 },
            color: { type: Types.Text, wysiwyg: true, height: 400 },
            href: { type: Types.Text, wysiwyg: true, height: 400 },
        },
    },
});

About.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

About.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
About.register();