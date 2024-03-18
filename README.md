Automation of test scenarios using CodeceptJS + Appium (iOS and Android);
Environment configured for the MacOS Sonoma operating system.
Note:
-> Start Appium with the command: appium -p 4723 --base-path /wd/hub

-> Start tests with the command - Android (Check device-name e version): 
PLATFORM=Android APP='resources/app-registrations.apk' DEVICE=emulator-5554 PACKAGE=com.qazandoapp ACTIVITY=MainActivity AUTONAME=UiAutomator2 VERSION=13 npx codeceptjs run --steps 

-> Start tests with the command - iOS (Check device-name e version): 
PLATFORM=iOS APP='resources/registrations-app.app' DEVICE='iPhone 15 Pro' AUTONAME=XCUITest VERSION=17.2 npx codeceptjs run --steps
