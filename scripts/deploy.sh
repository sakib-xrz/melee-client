#!/bin/bash
set -e
 
echo "Deployment started..."
 
git pull origin main
 
echo "Installing Dependencies..."
npm install --yes
 
echo "Creating Production Build..."
npm run build
 
echo "PM2 Reload"
pm2 reload melee-app
 
echo "Deployment Finished!!!"