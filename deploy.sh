#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

read -p "Press enter to continue"

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'live.katescorefitness.co.uk' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:joewill01/Kates-Core-Fitness-Live.git master:gh-pages

cd -