#!/bin/bash
ng build --prod --base-href https://onurkaraduman.github.io/fixed-angular/
git checkout gh-pages
ls | grep -v dist | xargs rm -r
cp dist/fixed-angular/* .
git add .
git commit -m "update"
git push origin gh-pages