#!/bin/sh

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd

remote=$(git config remote.origin.url)

versionUpdate="$1"

if [ ! "$versionUpdate" ]
then
    echo "Usage: $0 [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]"
    exit 1
fi

yarn run clean
yarn run build

npm version "$versionUpdate"

# make a directory to put the production branch
mkdir dist
cd dist

git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1

git init
git remote add --fetch origin "$remote"

# switch into the the production branch
if git rev-parse --verify origin/production > /dev/null 2>&1
then
    git checkout production
    # delete any old site as we are going to replace it
    # Note: this explodes if there aren't any, so moving it here for now
    git rm -rf .
else
    git checkout --orphan production
fi

# copy over or recompile the new site
cp -rf "../services/" services/
cp -rf "../models/" models/
cp -rf "../index.js" .

# stage any changes and new files
git add -A
# now commit, ignoring branch production doesn't seem to work, so trying skip
git commit --allow-empty -m "Deploy to Production [ci skip]"
# and push, but send any output to /dev/null to hide anything sensitive
git push --force --quiet origin production > /dev/null 2>&1

echo "Finished Deployment!"

