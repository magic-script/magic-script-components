# Running `Catalog` demo app

## Lumin Runtime
1. Please follow the steps for MagicScript [Getting Started](https://www.magicscript.org/docs/getting-started) in order to setup the environment and signing certificate.
2. Clone the Catalog app from [Github](https://github.com/magic-script/magic-script-components-catalog): `git clone git@github.com:magic-script/magic-script-components-catalog.git`
3. Go to the app folder: `cd magic-script-components-catalog`
3. Install all the required packages: `npm install`
4. Build and install the project on ML device: `magic-script build -i`
5. Run the `Catalog` app: `magic-script run`


## Android

1. Install ReactNative: https://facebook.github.io/react-native/docs/getting-started (select `React Native CLI Quickstart`)
2. Install Android Studio: https://developer.android.com/studio/install (if not installed already)
3. Install Yarn:
    3.1. Open https://yarnpkg.com/en/docs/install#debian-stable
    3.2. Selected the proper operating system and follow the instructions.

### Run Catalog app
I. From command line:
1. Clone the Catalog app: `git clone git@github.com:magic-script/magic-script-components-catalog.git`
2. Go to the app folder: `cd magic-script-components-catalog`
3. Open package.js in text editor
4. Update `magic-script-components-react-native` dependency to: "magic-script-components-react-native": "^0.1.0"
5. Run: `yarn`
6. Android: Run: `react-native run-android --device` or `react-native run-android --simulator`

II. From Android Studio
1. Open `android` folder
2. Select the connected Android device (or simulator)
2. Run the project


## iOS

1. Install XCode from AppStore https://apps.apple.com/us/app/xcode/id497799835?mt=12 or from download section of https://developer.apple.com/
2. Install Homebrew - follow instructions from https://brew.sh/
3. Install CocoaPods: sudo gem install cocoapods (https://guides.cocoapods.org/using/getting-started.html)
4. Install ReactNative - follow React Native CLI Quickstart instructions from https://facebook.github.io/react-native/docs/getting-started
5. Install Yarn: brew install yarn (https://yarnpkg.com/lang/en/docs/install/#mac-stable)


### Run Catalog app
I. From command line:
1. Clone the Catalog app: `git clone git@github.com:magic-script/magic-script-components-catalog.git`
2. Go to the app folder: `cd magic-script-components-catalog`
3. Open package.js in text editor
4. Update `magic-script-components-react-native` dependency to: "magic-script-components-react-native": "^0.1.0"
5. Run: `yarn`
6. iOS: Run: `react-native run-ios --device` or `react-native run-ios --simulator` if you run default installation of Xcode 11 or newer.

II. From XCode:
1. Open `ios/Catalog.xcworkspace`
2. Select the `Catalog` project
3. Delete `CatalogTest` from `Targets`
4. Select `Team` from `Signing`
5. Build the project
6. Select the connected iOS device (or simulator)
7. Run the project
