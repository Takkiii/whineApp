babel --presets react,es2015 app/frontends -d public/assets/javascripts/build
browserify public/assets/javascripts/build/components/books.js -o public/assets/javascripts/bundle.js

date; echo;