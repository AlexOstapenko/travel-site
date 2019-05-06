var gulp = require("gulp");
var postcss = require("gulp-postcss"); 
var plumber = require("gulp-plumber"); 
var autoprefixer = require( "autoprefixer");
var simplevars = require("postcss-simple-vars");
var nestedcss = require("postcss-nested");
var importcss = require("postcss-import");
var mixins = require("postcss-mixins");


gulp.task( "processCSS", () => {

	let res = gulp.src("./app/assets/css/main.css")
			.pipe( plumber() )
			.pipe(postcss([importcss, mixins, nestedcss, simplevars, autoprefixer]))
			.pipe( gulp.dest("./app/assets/tmp/css") );
	return res;
});
