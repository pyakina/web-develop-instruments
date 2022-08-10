exports.default = function (done) { 
    console.log("Hello from my first task"); 
    done(); 
    }

exports.copy = function () { 
return src('src/*.scss') 
.pipe(dest('output')); 
}




const { src, dest, watch } = require('gulp'); // 1
const sass = require('gulp-sass')(require('sass'));
// Здесь код функции build из предыдущего примера

function build() { // 2
    return src('src/main.scss') // 3
    .pipe(sass()) // 4
    .pipe(dest('output'));
    }
exports.build = build; // 5
exports["build:watch"] = function () { // 2
return watch('src/*.scss', build); // 3
}