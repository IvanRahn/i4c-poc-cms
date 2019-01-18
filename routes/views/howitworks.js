var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	const card = await keystone.list('FeaturedCauseCard').model.find();
    res.send(card);
}