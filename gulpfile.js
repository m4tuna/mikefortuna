/***
---------------------------------------------------------
  Initialize Gulp & Plugins
---------------------------------------------------------  */
'use strict';

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  changed = require('gulp-changed'),
  concat = require('gulp-concat'),
  gutil = require('gulp-util'),
  imagemin = require('gulp-imagemin'),
  responsive = require('gulp-responsive-images'),
  pngquant = require('imagemin-pngquant'),
  jshint = require('gulp-jshint'),
  minify = require('gulp-minify-css'),
  //cssnano = require('gulp-cssnano'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  globCss = require('gulp-css-globbing'),
  gulpif  = require('gulp-if'),
  uglify = require('gulp-uglify'),
  shell = require('gulp-shell'),
  watch = require('gulp-watch'),
  // browserSync = require('browser-sync'),
  url = require('url');


var drushAlias = '@demo.prod';

/***
---------------------------------------------------------
If "dev" is passed from the command line then do dev tasks (unminified CSS, sourcemaps, etc)

EX: gulp --type=dev
---------------------------------------------------------  */
if(gutil.env.type === 'dev') {
  isDev  = true;
  isProd = false;
} else {
  var isDev  = false;
  var isProd = true;
}

/* ***** Gulp Tasks ***** */

/***
---------------------------------------------------------
// Compile CSS, apply prefixer and sourcemaps if set to dev
---------------------------------------------------------  */
gulp.task('scss', function() {

  gutil.log(gutil.colors.bgGreen('   ..::: SCSS TASKS :::...   '));

  return gulp.src('./sass/*.scss')
    .pipe(globCss({
      extensions: ['.css', '.scss'],
      autoReplaceBlock: {
        onOff: false,
        globBlockBegin: 'cssGlobbingBegin',
        globBlockEnd: 'cssGlobbingEnd',
        globBlockContents: '../**/*.scss'
      },
      scssImportPath: {
        leading_underscore: false,
        filename_extension: false
      }
    }))
    .pipe(plumber())

    .pipe(sourcemaps.init())

  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulpif(isProd, minify()))
  .pipe(gulpif(isDev, sourcemaps.write()))
  .pipe(gulp.dest('css'))
  // .pipe(gulpif(isDev, browserSyncIGA.stream()));
});

/***
---------------------------------------------------------
// JS Tasks
---------------------------------------------------------  */
gulp.task('js', function() {

  gutil.log(gutil.colors.bgBlue('   ..::: JS TASKS :::...   '));

  return gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    //.pipe(sourcemaps.init())
    .pipe(gulpif(isProd, uglify()))
    .pipe(concat('asf-custom.min.js'))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('js'));

});

/***
---------------------------------------------------------
// Image Tasks
---------------------------------------------------------  */
gulp.task('images', function() {

  gutil.log(gutil.colors.bgYellow('   ..::: IMAGE TASKS :::...   '));

  return gulp.src('images/original/**')
    //.pipe(changed('images'))
    .pipe(responsive({
      'logo-*.png': [{
        width: 200,
        suffix: '-200'
      }, {
        width: 200 * 2,
        suffix: '-200@2x'
      }],
      'background*.jpg': [{
        width: 960,
        suffix: '-sm'
      }],
      'bg*.jpg': [{
        width: 960,
        suffix: '-sm'
      }]
    }))
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true,
      optimizationLevel: 5,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('images/optimized'));
});

/***
---------------------------------------------------------
// Drush Tasks
---------------------------------------------------------  */

gulp.task('drush', shell.task([
  'drush ' + drushAlias + ' cc views; drush ' + drushAlias + ' cc all'
]));


/***
---------------------------------------------------------
// Serve Tasks
---------------------------------------------------------  */


gulp.task('serve', ['browser-sync'], function() {

  gutil.log(gutil.colors.bgRed('   ..::: INITIALIZING GULP :::...   '));

  gulp.watch('sass/**', ['scss']);
  gulp.watch('js/*.js').on('change', browserSyncIGA.reload);
  gulp.watch('images/**', ['images']);

});


gulp.task('watch', ['default'], function() {

  gulp.watch('gulpfile.js', ['default']);
  gulp.watch('sass/**', ['scss']);
  gulp.watch('images/**', ['images']);

});

// Default Task
gulp.task('default', ['scss', 'serve']);
