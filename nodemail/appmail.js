var nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adeel.ansari.2785@gmail.com',
      pass: 'aqua2785'
    }
  });
  
  var mailOptions = {
    from: 'adeel.ansari.2785@gmail.com',
    to: 'adeel.ansari@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
