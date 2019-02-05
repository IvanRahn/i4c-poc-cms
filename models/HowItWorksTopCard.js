var keystone = require('keystone');
var Types = keystone.Field.Types;

var HowCard = new keystone.List("HomePageTopCard", {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

HowCard.add({
	title: { type: String, required: true },
    featured: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
    image: { type: Types.CloudinaryImage },
    heading: { type: Types.Text, wysiwyg: true, height: 150 },
    text: { type: Types.Text, wysiwyg: true, height: 400 },
    
});

HowCard.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

HowCard.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
HowCard.register();