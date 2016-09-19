var ejs = require("ejs");
var path    = require("path");
function signup(req,res) {


    var data= {
        "firstname":req.param("FIRSTNAME"),
        "lastname":req.param("LASTNAME")
    };
   ejs.renderFile('./views/signup.ejs',{data: data},function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });

}

exports.signup=signup;