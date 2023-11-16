#!/bin/bash
npm install
ng build --prod --base-href https://fixvisualizer.com/
git status
git checkout package-lock.json
git checkout gh-pages
git pull
ls | grep -v dist | xargs rm -r
cp -r dist/fixvisualizer.com/* .
git add .
git commit -m "update"
git push origin gh-pages
