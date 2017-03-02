
var User = require('./models/user');
var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
	service: "Gmail",
	host: "smtp.gmail.com",
	auth: {
		user: "buckscountytourofhonor@gmail.com",
		pass: process.env.GMAIL_PASSWORD

	}
});
module.exports = function(app, passport){
	app.get('/', function(req, res){
		//res.render('index.html');
		res.sendFile(__dirname + '/index.html');
	});

	app.get('/send',function(req,res){
		var mailOptions={
			to : 'buckscountytourofhonor@gmail.com',
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



};
