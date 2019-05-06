var gulp = require("gulp");
var watch = require("gulp-watch");
var browserSync = require("browser-sync").create();

gulp.task( "watch", () => {
	browserSync.init( {
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch( "./app/index.html", () => {
		browserSync.reload();
	});

	watch( "./app/assets/css/**/*.css", () => {
		gulp.start( "cssInject" );
	});

});


gulp.task( "cssInject", ["processCSS"], function() {
	return gulp.src("./app/assets/tmp/css/main.css")
		.pipe( browserSync.stream() );
});
