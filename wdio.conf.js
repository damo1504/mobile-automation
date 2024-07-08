const projectPath = require("path");
const androidAppPath = projectPath.join(
    process.cwd(),
    "app/android/Android-MyDemoAppRN.1.3.0.build-244.apk"
);
const iosAppPath = projectPath.join(process.cwd(), "app/ios/MyRNDemoApp.app");

module.exports.config = {
    runner: 'local',
    port: 4724,
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        "appium:app": androidAppPath,
        'appium:autoGrantPermissions': true,
        // appPackage: 'com.google.android.apps.nexuslauncher',
        // appActivity: 'com.google.android.apps.nexuslauncher.NexusLauncherActivity',
    },
    {
        "platformName": "IOS",
        "appium:deviceName": "iPhone 15",
        "appium:platformVersion": "17.5",
        "appium:automationName": "XCUItest",
        "appium:app": iosAppPath,
        'appium:autoGrantPermissions': true,
        // "bundleid": "com.saucelabs.mydemoapp.rn"
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            logPath: './'
        }]
    ],
    framework: 'cucumber',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};
