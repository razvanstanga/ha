#!/bin/sh

cd /ha/app
npm i

pm2 restart /ha/app/pm2.config.js --env production
pm2 save

exit 0
