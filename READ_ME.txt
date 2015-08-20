How to generate the minified version of the app?

1. Run grunt command from ‘./grunt/‘ folder.
2. This will generate a minified build at ‘./build/‘ folder.
3. Now open up the ‘./build/index.html’ file and change _BASE_PATH_ to your hosting path

i.e: <base href=“_BASE_PATH_” />

4. Also update this base path in the ‘./build/.htaccess’ file.

i.e: RewriteBase _BASE_PATH_

5. That is all! Now app is ready for deployment..

