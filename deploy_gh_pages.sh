#!/bin/bash
npm install
ng build --prod --base-href https://onurkaraduman.github.io/fixvisualizer.com/
git checkout gh-pages
git pull
ls | grep -v dist | xargs rm -r
cp -r dist/fixvisualizer.com/* .
git add .
git commit -m "update"
git push origin gh-pages
