var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Cause = new keystone.List('CauseOurDonorSection', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Cause.add({
    title: { type: String, required: true },
    pageHeading: { type: Types.Text, wysiwyg: true, height: 150 },
    image: { type: Types.CloudinaryImage },
    heading: { type: Types.Text, wysiwyg: true, height: 150 },
    subHeading: { type: Types.Text, wysiwyg: true, height: 150 },
    text: { type: Types.Html, wysiwyg: true, height: 400 }  ,
    
});

Cause.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Cause.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Cause.register();