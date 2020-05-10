//Import Assignment model
var Assignment = require('./asgn-model');

//List all action - index
exports.index = function (req, res) {
    Assignment.get(function (err, assignment) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: "success",
            message: "Assignments retrieved successfully",
            data: assignment
        })
    })
}

//Create assignment action
exports.new = function (req, res) {
    var assignment = new Assignment();
    assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;

    assignment.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New assignment created",
            data: assignment
        })
    })
}

//View singular action
exports.view = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "Assignment details found",
            data: assignment
        })
    })
}

//Update action
exports.update = function (req, res) {
    Assignment.findById(req.params.assignment_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        assignment.courseName = req.body.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;

        assignment.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "Assignment updated",
                data: assignment
            })
        })
    })
}

exports.delete = function (req, res) {
    Assignment.remove({
        _id: req.params.assignment_id
    }, function (err, assignment) {
            if (err) {
                res.json(err);
            }
            res.json({
                status: "Success",
                message: "Assignment deleted"
            })
    })
}

