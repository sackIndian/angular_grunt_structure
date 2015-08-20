module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.config.init({
        useminPrepare: {
            html: '../source/index.html',
            options: {
                dest: '../build/'
            }
        },
        usemin: {
            html: ['.usemintemplate/index.html']
        },
        copy: {
            html: {
                src: '../source/index.html',
                dest: '.usemintemplate/index.html'
            },
            template: {
                expand: true,
                cwd: '.templatemin/app/',
                src: ['*.html', '*/*.html', '*/*/*.html'],
                dest: '../build/app/',
                flatten: false,
                filter: 'isFile'
            },
            image: {
                expand: true,
                cwd: '../source/assets/css/',
                src: ['*/*'],
                dest: '../build/css/',
                flatten: false,
                filter: 'isFile'
            }
        },
        htmlmin: {
            templatindex: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '.usemintemplate/',
                    src: ['index.html'],
                    dest: '../build/'
                }]
            },
            templatemin: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '../source/app/',
                    src: ['*.html', '*/*.html', '*/*/*.html'],
                    dest: '.templatemin/app/'
                }]
            }
        }

    });

    grunt.registerTask('default', [
        'copy:html',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin',
        'copy:image',
        'htmlmin:templatindex',
        'htmlmin:templatemin',
        'copy:template'
    ]);
}
