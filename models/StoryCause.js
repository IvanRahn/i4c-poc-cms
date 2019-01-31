var keystone = require('keystone');
var Types = keystone.Field.Types;

var StoryCause = new keystone.List('StoryCause', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
});
StoryCause.add({ 
    // cardTop: {
    //     heading: { type: Types.Text, wysiwyg: true, height: 150 },
    //     text: { type: Types.Html, wysiwyg: true, height: 400 },
    //     image: { type: Types.CloudinaryImage },
    // },
    title: { type: String, required: true },
    image: { type: Types.CloudinaryImage },
    content: {
        heading: { type: Types.Text, wysiwyg: true, height: 150 },
        text: { type: Types.Html, wysiwyg: true, height: 400 },
    }, 
    
});
StoryCause.schema.virtual('content.full').get(function () {
    return this.content.text || this.content.heading;
});
StoryCause.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
StoryCause.register();