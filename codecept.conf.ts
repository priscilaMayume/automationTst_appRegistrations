import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import * as path from 'path';

 const appPath = path.join(__dirname, process.env.APP);

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true, 
      app: appPath,
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
    I: './steps_file'
  },
  name: 'automationTst_AppRegistrations'
}