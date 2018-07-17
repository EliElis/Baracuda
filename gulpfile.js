var gulp = require('gulp')
	, sass = require('gulp-sass')
	, autoprefixer = require('gulp-autoprefixer')
	, browserSync = require('browser-sync').create()
	, image = require('gulp-image')
	, cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./app/css/**.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('.app/css/*.scss', ['sass']);
});

gulp.task('sass:watch', function () {
  gulp.watch('.app/css/*.css', ['styles']);
});

gulp.task('styles', function () {
	return gulp.src('./app/css/**.css').pipe(autoprefixer({
			browsers: ['last 10 versions']
			, cascade: true
		}))
		.pipe(cleanCSS({
			compatibility: 'ie8'
		})).pipe(gulp.dest('build/css')).pipe(browserSync.stream());
});

gulp.task('browser-sync', ['sass', 'styles', 'html', 'image', 'js', 'fonts'], function () {
	browserSync.init({
		server: {
			baseDir: 'build'
		}
		, notify: false
	});
});

gulp.task('image', function () {
	gulp.src('./app/img/**/*').pipe(image()).pipe(gulp.dest('./build/img'))
})
gulp.task('html', function () {
	return gulp.src('./app/*.html').pipe(gulp.dest('build'))
});

gulp.task('fonts', function () {
	return gulp.src('./app/fonts/**/*').pipe(gulp.dest('build/fonts'));
});


gulp.task('js', function () {
	gulp.src('app/js/**.js').pipe(gulp.dest('./build/js'))
});
gulp.task('build', ['sass', 'styles', 'html', 'image', 'js', 'fonts']);
gulp.task('watch', function () {
	gulp.watch('app/style/**/*', ['styles']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});
gulp.task('default', ['browser-sync', 'watch']);