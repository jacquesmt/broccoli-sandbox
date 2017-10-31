const funnel = require('broccoli-funnel');

const appRoot  = 'app';

//copy HTML from app root to destination
const html = funnel(appRoot, {
	files: ['index.html'],
	destDir: '/'
});

module.exports = html;