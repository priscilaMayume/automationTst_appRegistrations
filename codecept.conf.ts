const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const path = require('path');

//const appPath = path.join(__dirname, process.env.APP);
const appPathAndroid = path.join(__dirname, '/resources/app-registrations.apk');
const appPathIos = path.join(__dirname, '/resources/registrations-app.app');


setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: process.env.PLATFORM == 'Android' ? appPathAndroid : appPathIos,
      platform: process.env.PLATFORM,
      desiredCapabilities: {
        appPackage: process.env.PLATFORM == 'Android' ? process.env.PACKAGE : '',
        appActivity: process.env.PLATFORM == 'Android' ? process.env.ACTVITY : '',
        deviceName: process.env.DEVICE,
        automationName: process.env.PLATFORM == 'Android' ? process.env.AUTONAME : 'XCUITest',
        platformVersion: process.env.VERSION

      }
    }
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enable: true
    },
    screenshotOnFail: {
      enable: true
    }
  },
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js",
    home_page: "./pages/home_page.js",
    
  },
  name: 'automationTst_AppRegistrations'
}