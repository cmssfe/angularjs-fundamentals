var gulp=require('gulp');

var connect = require('gulp-connect');


gulp.task('default',function(){
//Ĭ������
	connect.server({
	root:'app',
	port:8010
	});
});