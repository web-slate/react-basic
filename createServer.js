var http = require('http');
var fs = require('fs');

console.log('Create Server ... ');

var server = http.createServer(function (request, response) {

    var fileName = 'inc/index.html',
        contentType = {
            'html': 'text/html',
            'js': 'text/javascript',
            'jsx': 'text/babel',
            'css': 'text/css'
        };

    if(request.url.indexOf('/app/') > -1) {
        console.log('Exist Path');
        fileName = '.' + request.url;
        console.log('fileName: ', fileName);
        contentType = (request.url.indexOf('.jsx') > -1) ? contentType['jsx'] : (request.url.indexOf('.css') > -1) ? contentType['css'] : contentType['js'];
        console.log('contentType: ', contentType);
    }

    response.writeHead(200, { 'Content-Type': contentType });
    fileData = fs.readFileSync(fileName, 'utf8');
    response.write(fileData);

    response.end();
});

server.listen(9000);
console.log('Server started !');
