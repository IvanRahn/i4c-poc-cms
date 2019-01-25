var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var TeamSection = new keystone.List('TeamSection', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

TeamSection.add({
	title: { type: String, required: true },
    media: { type: Types.Text },
    heading: { type: Types.Html, wysiwyg: true, height: 150 },
	text: { type: Types.Html, wysiwyg: true, height: 400 },
});

TeamSection.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

TeamSection.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
TeamSection.register();