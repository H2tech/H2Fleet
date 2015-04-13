/**
 * Author : Bill Gooch
 *
 *
 */
exports.addRoutes = function(router ) {

    var User = require('../models/user');

    router.route('/user')

        .post(function(req, res) {

            var user = new User();
            user.fName = req.body.fName;
            user.lName = req.body.lName;

            user.save(function(err) {

                if (err)
                    res.send(err);

                res.json({ message: 'User created!' });
            });
        })

        .get(function(req, res) {

            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });

        });
};
