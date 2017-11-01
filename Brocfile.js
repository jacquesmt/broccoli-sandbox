const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');
const compileSass = require('broccoli-sass-source-maps');

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
const css = compileSass(
	[appRoot],
	'styles/app.scss',
	'assets/app.css',
	{
	    sourceMap: true,
	    sourceMapEmbed: true,
	    sourceMapContents: true,
  	}
);

module.exports = merge([html, js, css]);