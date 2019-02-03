var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var About = new keystone.List('AboutSecondSection', {
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
    contentMiddle: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    contentBottom: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
        text: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    image_logos: {
        image_logo1: { type: Types.CloudinaryImage },
        image_logo2: { type: Types.CloudinaryImage },
    },
    linksBottom: {
        link: {
            text: { type: Types.Text, wysiwyg: true, height: 400 },
            color: { type: Types.Text, wysiwyg: true, height: 400 },
            href: { type: Types.Text, wysiwyg: true, height: 400 },
        },
        link2: {
            text: { type: Types.Text, wysiwyg: true, height: 400 },
            color: { type: Types.Text, wysiwyg: true, height: 400 },
            href: { type: Types.Text, wysiwyg: true, height: 400 },
        },
    },
    volunteerHeading: { type: Types.Text, wysiwyg: true, height: 150 },

});

About.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

About.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
About.register();