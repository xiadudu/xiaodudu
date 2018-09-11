var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglifyJs = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var opn = require('opn');
var cssmin = require('gulp-cssmin');
var gulpSequence = require('gulp-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var fileinclude = require('gulp-file-include'); 
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var app = {
    srcPath : 'src/',
    devPath : 'dev/',
    prdPath : 'dist/'
}
gulp.task('html',function(){
    gulp.src([app.srcPath+'/html/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe(reload({ stream: true }));
});
gulp.task('css', function() {
    return gulp.src(app.srcPath+'/assets/sass/**/*.scss')
        .pipe(sass({}).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie 8-11', 'Firefox ESR'] }))
        .pipe(cssmin())
        .pipe(gulp.dest(app.devPath+'/assets/css'))
        .pipe(gulp.dest(app.prdPath+'/assets/css'))
        .pipe(reload({ stream: true }));
});
gulp.task('build-js', function() {
    return gulp.src(app.srcPath+'/assets/js/**/*.js')
        .pipe(babel({
                presets: ['env']
            }))
        .pipe(uglifyJs())
        .pipe(gulp.dest(app.prdPath+'/assets/js'))
});
gulp.task('copy-js', function() {
    return gulp.src(app.srcPath+'/assets/js/**/*.js')
        .pipe(babel({
                presets: ['env']
            }))
        .pipe(gulp.dest(app.devPath+'/assets/js'))
});
gulp.task('lib', function() {
    return gulp.src(app.srcPath+'/assets/lib/**/*')
        .pipe(gulp.dest(app.devPath+'/assets/lib'))
        .pipe(gulp.dest(app.prdPath+'/assets/lib'));
});
gulp.task('img',function(){
    return gulp.src(app.srcPath+'/assets/images/**/*')
           .pipe(gulp.dest(app.devPath+'/assets/images'))
           .pipe(gulp.dest(app.prdPath+'/assets/images'));
});
gulp.task('connect',function(){
    connect.server({
        host: '::',
        root:'./dev',  
        ip:'127.0.0.1',
        livereload: true,
        port: 8081
    });
    opn('http://localhost:8081/');
});
gulp.task('watch', function(done) {
    gulp.watch('src/**/*', ['css', 'build-js', 'html'],function(){
        connect.reload();
    })    
});
gulp.task('clean', function() {
    gulp.src([app.prdPath])
        .pipe(clean())
});

gulp.task('default', gulpSequence('css','copy-js','html','img','lib', 'connect', 'watch'));
gulp.task('build',gulpSequence('clean','css','build-js','html','img','lib'))