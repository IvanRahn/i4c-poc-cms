var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Cause = new keystone.List('Causes', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Cause.add({
	title: { type: String, required: true },
	featuredAsCard: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
	hidden: { type: Types.Select, options: 'Yes, No', default: 'No', index: true },
	cardContent: {
		heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 200 },
		image: { type: Types.CloudinaryImage },
    },
    topSection: {
		heading: { type: Types.Text, wysiwyg: true, height: 150 },
		text: { type: Types.Html, wysiwyg: true, height: 200 },
		image: { type: Types.CloudinaryImage },
	},
	impact1: {
		image: {type: Types.CloudinaryImage},
		value: {type: Number},
		text: {type: Types.Text}
	},
	impact2: {
		image: {type: Types.CloudinaryImage},
		value: {type: Number},
		text: {type: Types.Text}
	},
	impact3: {
		image: {type: Types.CloudinaryImage},
		value: {type: Number},
		text: {type: Types.Text}
	},
	impact4: {
		image: {type: Types.CloudinaryImage},
		value: {type: Number},
		text: {type: Types.Text}
	},
	middleSection: {
		heading1: {type: Types.Text},
		text: { type: Types.Html, wysiwyg: true, height: 200 },		
		cardHeading: {type: Types.Text},
		cardText: { type: Types.Html, wysiwyg: true, height: 200 },
		cardFile: {type: Types.CloudinaryImage},
	},
	quote: {
		text: { type: Types.Html, wysiwyg: true, height: 200 },
		author: {type: Types.Text},
	},
	story: {
		image: {type: Types.CloudinaryImage},
		heading: {type: Types.Text},
		subHeading: {type: Types.Text},
		text: { type: Types.Html, wysiwyg: true, height: 200 },
		achievement1: {
			image: {type: Types.CloudinaryImage},
			text: {type: Types.Text}
		},
		achievement2: {
			image: {type: Types.CloudinaryImage},
			text: {type: Types.Text}
		},
		achievement3: {
			image: {type: Types.CloudinaryImage},
			text: {type: Types.Text}
		}
	}
});

Cause.schema.virtual('content.full').get(function () {
	return this.content.text || this.content.heading;
});

Cause.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Cause.register();