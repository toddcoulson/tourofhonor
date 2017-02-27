
var User = require('./models/user');
var nodemailer = require("nodemailer");
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	auth: {
		user: "tcoulson@gmail.com",
		pass: "marathon9"
	}
});
module.exports = function(app, passport){
	app.get('/', function(req, res){
		//res.render('index.html');
		res.sendFile(__dirname + '/index.html');
	});

	app.get('/send',function(req,res){
		var mailOptions={
			to : 'tcoulson@gmail.com',
			from: req.query.email,
			subject : req.query.subject,
			text : req.query.name +": "+req.query.message
		}
		console.log(mailOptions);
		smtpTransport.sendMail(mailOptions, function(error, response){
			if(error){
				console.log(error);
				res.end("error");
			}else{
				console.log("Message sent: " + response.message);
				res.end("sent");
			}
		});
	});



	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.ejs', { user: req.user });
	});


	app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

	app.get('/auth/google/callback', 
			passport.authenticate('google', { successRedirect: '/profile',
											 failureRedirect: '/' }));

};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}
