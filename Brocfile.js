const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');

const appRoot  = 'app';

//copy HTML from app root to destination
const html = funnel(appRoot, {
	files: ['index.html'],
	destDir: '/'
});

// Copy JS file into assets
const js = funnel(appRoot, {
	files: ['app.js'],
	destDir: '/assets'
});

// Copy css file into assets
const css = funnel(appRoot, {
	srcDir: 'styles',
	files: ['app.css'],
	destDir: '/assets'
})

module.exports = merge([html, js, css]);