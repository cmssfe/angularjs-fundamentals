var gulp=require('gulp');

var connect = require('gulp-connect');


gulp.task('default',function(){
//д╛хохннЯ
	connect.server({
	root:'app',
	port:8010
	});
});