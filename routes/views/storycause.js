var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	const cause = await keystone.list('StoryCause').model.find({hidden: "No"});
    res.send(cause);
}