var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	const cause = await keystone.list('HowItWorksCauseCard').model.find();
    res.send(cause);
}