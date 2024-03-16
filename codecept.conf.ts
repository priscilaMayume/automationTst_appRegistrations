import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true, 
    //  app: '/Users/priscilahirotsu/Downloads/appsqazando/app-release.apk',
      app: '/Users/priscilahirotsu/Downloads/appsqazando/qazandoapp.app',
      platform: 'iOS',
     // platform: 'Android',
      desiredCapabilities: {
       // appPackage: 'com.qazandoapp',
      //  appActivity: 'MainActivity',
       // deviceName: 'emulator-5554',
        deviceName: 'iPhone 15 Pro',
       // automationName: 'UiAutomator2',
        automationName: 'XCUITest',
        platformVersion: '17.2'
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