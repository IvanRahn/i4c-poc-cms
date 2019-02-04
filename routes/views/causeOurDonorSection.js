var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	const cause = await keystone.list('CauseOurDonorSection').model.find();
    res.send(cause);
}