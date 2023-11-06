const {src, dest, watch, series} = require('gulp');

function docsify(callback) {
    src('./src/index.html')
        .pipe(src('./src/_sidebar.md'))
        .pipe(src('./README.md'))
        .pipe(src('./.nojekyll'))
        .pipe(dest('./docs'));
    callback();
}

function dsfrise(callback) {
    src('./node_modules/@gouvfr/dsfr/dist/icons*/**/*')
        .pipe(src('./node_modules/@gouvfr/dsfr/dist/favicon*/**/*'))
        .pipe(src('./node_modules/@gouvfr/dsfr/dist/fonts*/**/*'))
        .pipe(dest('./docs/assets'));
    callback();
}

exports.default = series(docsify, dsfrise);
