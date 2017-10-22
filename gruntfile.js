module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: [ 'app.js', 'app.min.js', 'app.min.css' ]
        },

        concat: {
            dist: {
                src: [ 'app.*.js', 'components/**/*.js', 'shared/*.js'],
                dest: 'app.js'
            }
        },

        ngAnnotate: {
            app: {
                files: {
                    'app.js': [ 'app.js' ]
                }
            }
        },

        uglify: {
            build: {
                src: [ 'app.js' ],
                dest: 'app.min.js'
            }
        },

        cssmin: {
            target: {
                files: [{
                    src: [ 'assets/css/*.css' ],
                    dest: 'app.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate'); 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['clean', 'concat', 'ngAnnotate', 'uglify', 'cssmin']);

}