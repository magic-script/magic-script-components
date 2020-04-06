class Platform {
  static setPlatformInformation(platform) {
    Platform.OS = platform.name();
    Platform.Version = platform.version();
  }

  static setLinking(linking) {
    Platform.linking = linking;
  }

  static canOpenUrl(url) {
    Platform._assertLinking();
    try {
      return Platform.linking.canOpenURL(url);
    } catch {
      return new Promise((resolve, reject) => reject({ message: 'Invalid format.' }));
    }
  }

  static openUrl(url) {
    Platform._assertLinking();
    return Platform.linking.openURL(url);
  }

  static _assertLinking() {
    if (typeof Platform.linking === 'undefined') { console.error('Platform.Linking not set.'); }
  }
}

export { Platform };
