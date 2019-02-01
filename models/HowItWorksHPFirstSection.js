var keystone = require('keystone');
var Types = keystone.Field.Types;

var HowCard = new keystone.List('HomePageCardFirstSection', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

HowCard.add({
    title: { type: String, required: true },
    heading: { type: Types.Text, wysiwyg: true, height: 150 },
    text: { type: Types.Text, wysiwyg: true, height: 400 },
    link: {
        text: { type: Types.Html, wysiwyg: true, height: 400 },
        url: { type: Types.Text, wysiwyg: true, height: 400 },
    },
    image: { type: Types.CloudinaryImage },
    
    
    
});

HowCard.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

HowCard.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
HowCard.register();