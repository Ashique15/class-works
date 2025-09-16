var http = require('http');

var server = http.createServer(function (req, res) {
  	res.statusCode = 404;
  	res.statusMessage = 'Not Found';
  
  	var html = `<!DOCTYPE html>
	<html>
	<head>
		<title></title>
	</head>
	<body>
	"WELCOME TO NOORUL ISLAM COLLEGE"!
	<h1>About Noorul Islam college</h1>
	</body>
	</html>`;
  
  	res.write(html);
  	res.write('Page not Found');
  	res.end();
});
server.listen(8080);
 