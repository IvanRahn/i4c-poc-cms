var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	const cause = await keystone.list('HomePageCard').model.find();
    res.send(cause);
}