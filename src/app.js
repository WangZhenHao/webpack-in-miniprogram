// app.js
const config = require(`./environments/environments.${process.env.BUILD_ENV}.js`)
// import config from `./environments/environments.${process.env.BUILD_ENV}.js`
// const axois = require('@utils/axois');
import axois from '@utils/axios'


App({
  global: {
    config: config
  },
  onLaunch() {
      wx.$axois = axois;
      console.log(axois)
  }
});

