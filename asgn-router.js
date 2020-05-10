let router = require("express").Router();
let controller = require('./asgn-controller');

//Routes
router.route('/assignment')
    .get(controller.index)
    .post(controller.new);

router.route('/assignment/:assignment_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);



//Default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Welcome to Assignments API!'
    });
});


module.exports = router;
