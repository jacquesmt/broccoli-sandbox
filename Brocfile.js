const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');
const compileSass = require('broccoli-sass-source-maps');
const babel = require('broccoli-babel-transpiler');

const appRoot  = 'app';

//copy HTML from app root to destination
const html = funnel(appRoot, {
	files: ['index.html'],
	destDir: '/'
});

// Copy JS file into assets
let js = funnel(appRoot, {
	files: ['app.js'],
	destDir: '/assets'
});

// Transpile JS file to ES5
 js = babel(js, {
 	browserPolyfill: true,
 	sourceMap: 'inline'
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