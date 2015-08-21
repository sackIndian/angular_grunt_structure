# angular_grunt_structure

An angular kick start which provides JOHNPAP styles of coding structure.

Along with that it has grunt CSS, JS, HTML minifier which can be used for minification of codes.

<h3>How to generate the minified version of the app?</h3>

1. Run grunt command from ‘./grunt/‘ folder.
2. This will generate a minified build at ‘./build/‘ folder.
3. Now open up the ‘./build/index.html’ file and change _BASE_PATH_ to your hosting path

i.e: <base href=“_BASE_PATH_” />

4. Also update this base path in the ‘./build/.htaccess’ file.

i.e: RewriteBase _BASE_PATH_

5. That is all! Now app is ready for deployment..
