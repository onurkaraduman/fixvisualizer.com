#!/bin/bash
npm install
ng build --prod --base-href https://onurkaraduman.github.io/fixed-angular/
git checkout gh-pages
git pull
ls | grep -v dist | xargs rm -r
cp -r dist/fixed-angular/* .
git add .
git commit -m "update"
git push origin gh-pages