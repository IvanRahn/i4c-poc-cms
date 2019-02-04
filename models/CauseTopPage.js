var keystone = require('keystone');
var Types = keystone.Field.Types;

var Cause = new keystone.List('CauseTopPage', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Cause.add({
	title: { type: String, required: true },
    image: { type: Types.CloudinaryImage },
    toplink: {
        text: { type: Types.Text, wysiwyg: true, height: 400 },
        color: { type: Types.Text, wysiwyg: true, height: 400 },
        href: { type: Types.Text, wysiwyg: true, height: 400 },
    },
    heading: { type: Types.Text, wysiwyg: true, height: 150 },
    text: { type: Types.Text, wysiwyg: true, height: 400 },
});

Cause.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Cause.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Cause.register();