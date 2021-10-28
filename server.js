function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);
//app.use(express.static('./dist/exercise-all-cloud'));
app.use(express.static(__dirname + '/dist/exercise-all-cloud'));
// app.use(express.static(path.join(__dirname, './build')));

app.get('/*', function(req, res) {
    console.log(__dirname);
    const indexFile = path.resolve(__dirname + '/dist/exerciseAllCloud/index.html');
    res.sendFile(indexFile);
    //res.sendFile('index.html', {root: 'dist/exerciseAllCloud/'});
    // res.sendFile(path.join(__dirname, '../dist/exercise-all-cloud/index.html'));
    //console.log("Hello222222222222222222222");
    });
app.listen(process.env.PORT || 8080);

