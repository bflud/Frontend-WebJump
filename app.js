var app = require('connect')()
var serveStatic = require('serve-static')
var cors = require('cors');
const path = require('path');
const fs = require('fs');
app.use(cors())
// Serve up mock-api folder


// app.use('/api/V1/categories/list', (req, res) => {
//   const filePath = path.join(__dirname, '/mock-api/V1/categories/list');
//   console.log(filePath)
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       res.statusCode = 500;
//       return res.end('Erro ao ler o arquivo'+filePath);
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.end(data);
//   });
// });

app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}))

// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader('Content-type', 'application/json')
}

// Serve up public folder
app.use('/', serveStatic('public', {'index': ['index.html', 'index.htm']}))

var teste = app.use('/api', serveStatic('mock-api', {
  'index': false,
  'setHeaders': setJsonHeaders
}));



app.listen(8888, function() {
    console.log('Acesse: http://localhost:8888')
});


