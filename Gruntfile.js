// gruntFile with jshint, cssmin, uglify

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            myApp: {
                files: {
                    'js/appNg.js': ['js/app.js']
                }
            }

        },

        uglify: {
           dist: {
               options: {
                   sourceMap: true,
                   banner: '/* Merging Data 1.0.0 | Alyssa Hudon */'
               },
               files: [
                   {src: 'js/appNg.js', dest: 'js/minApp.js'},
                   {src: 'js/employees.js', dest: 'js/minEmp.js'}
               ]
           }
        },

        jshint: {
            all: ['js/*.js']
        },

        cssmin: {
            add_banner: {
                options: {
                    banner: '/* Minified css for Merging Data 1.0.0 | Alyssa Hudon */'
                },
                files: {
                    'css/main.min.css': ['css/main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'cssmin', 'ng-annotate', 'uglify']);

    grunt.registerTask('ug', ['ngAnnotate', 'uglify']);
};