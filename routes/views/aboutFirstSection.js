var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	const card = await keystone.list('AboutFirstSection').model.find();
    res.send(card);
}