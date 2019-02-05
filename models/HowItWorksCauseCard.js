var keystone = require('keystone');
var Types = keystone.Field.Types;

var Cause = new keystone.List("HowItWorksCauseCard", {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Cause.add({
	title: { type: String, required: true },
    image: { type: Types.CloudinaryImage },
	text: { type: Types.Html, wysiwyg: true, height: 400 },    
  
});

Cause.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Cause.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Cause.register();