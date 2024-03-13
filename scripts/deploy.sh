#!/bin/bash
set -e
 
echo "Deployment started..."
 
git pull origin master
 
echo "Beautifying Code..."
npm run prettier
 
echo "Installing Dependencies..."
npm install --yes
 
echo "Creating Production Build..."
npm run build
 
echo "PM2 Reload"
pm2 reload my-app
 
echo "Deployment Finished!!!"