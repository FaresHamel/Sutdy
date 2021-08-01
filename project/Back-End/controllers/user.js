const user = require('../models/users')


module.exports.deletedUser = async(req, res) => {

    const userDeleted = new user({

        email: req.body.email,
        username: req.body.username

    });


    userDeleted.deleteOne({
      email: clientDeleted.email,
      username: clientDeleted.username,
    });

}

module.exports.updateInformationUser= (req, res, next) => {

}

module.exports.getInformationUser = (req, res, next) => {

    res.json({
        name: 'fares',
        lastname: 'hame',
        university: 'constantine',
        departement: 'NTIC',
        spiciality: 'gene logiciel',
        gradestudent: 'master 2'
    });
}