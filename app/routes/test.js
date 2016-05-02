var fs = require('fs');
var path = require('path');
var uuid = require('node-uuid');

var multer = require('multer');


var upload = multer({'dest': 'data/'});

module.exports = function(router) {

    router.route('/:test')
    .post(upload.single('file'), function (req, res, next) {
        

        fs.rename('data/' + req.file.filename, 'data/' + uuid.v4() + path.extname(req.file.originalname));
        res.json({status: 'OK'}).status(202);
    });
}