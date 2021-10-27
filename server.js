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
app.use(express.static('./dist/exercise-all-cloud'));
app.get('/*', function(req, res) {
    console.log("Hello1111111111111111111111");
    res.sendFile('index.html', {root: 'dist/exercise-all-cloud/'});
    console.log("Hello222222222222222222222");
    });
app.listen(process.env.PORT || 8080);

