const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const path = require('path');

const appPathAndroid = path.join(__dirname, '/resources/app-registrations.apk');
const appPathIos = path.join(__dirname, '/resources/registrations-app.app');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

const { bootstrap, teardown } = require('./server/server');
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: process.env.PLATFORM === 'Android' ? appPathAndroid : appPathIos,
      platform: process.env.PLATFORM,
      desiredCapabilities: {
        appPackage: process.env.PLATFORM === 'Android' ? process.env.PACKAGE : '',
        appActivity: process.env.PLATFORM === 'Android' ? process.env.ACTIVITY : '',
        deviceName: process.env.DEVICE,
        automationName: process.env.PLATFORM === 'Android' ? process.env.AUTONAME : 'XCUITest',
        platformVersion: process.env.VERSION
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap,
  teardown,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
      enable: true
    },
    retryFailedStep: {
      enable: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'automationTst_AppRegistrations'
};
