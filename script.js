
function Mail(){
Email.send({
Host : "smtp.elasticemail.com",
Username : "Kaushalpatel971@gmail.com",
Password : "8EBBDD9D842EEC05097F23848BFF622D8FD8",
To : 'payalpatel3727@gmail.com',
From : "payalpatel3727@gmail.com",
Subject : "This is the subject",
Body : "And this is the body"
}).then(
message => alert(message)
);
}
