var keystone = require('keystone');

exports = module.exports = async function (req, res) {
    
	const steps = await keystone.list('HowItWorksSteps').model.find();
	console.log('​steps', steps)
    res.send(steps);

}