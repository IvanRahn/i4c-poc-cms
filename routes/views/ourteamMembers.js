var keystone = require('keystone');
exports = module.exports = async function (req, res) {
    const card = await keystone.list('OurTeamMembers').model.find();
    res.send(card);
}