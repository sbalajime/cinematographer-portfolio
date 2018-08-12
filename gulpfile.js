var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var creds = require('./ftpcreds.js');

gulp.task( 'deploy', function () {

	var conn = ftp.create( {
		host:     creds.creds.host,
		user:     creds.creds.user,
		password: creds.creds.pass,
		parallel: 10,
		log:      gutil.log
	} );

	var globs = [
		'build/**'
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src( globs, { base: 'build/', buffer: false } )
		.pipe( conn.newer( '/public_html' ) ) // only upload newer files
		.pipe( conn.dest( '/public_html' ) );

} );