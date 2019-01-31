var keystone = require('keystone');
var Types = keystone.Field.Types;

var Member = new keystone.List('OurTeamFindOutMore', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
});
Member.add({
    title: { type: String, required: true },
    content: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
		link: {
            text: { type: Types.Html, wysiwyg: true, height: 400 },
            url: { type: Types.Text, wysiwyg: true, height: 400 },
        },
    },
});
Member.schema.virtual('content.full').get(function () {
    return this.content.text || this.content.heading;
});
Member.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Member.register();