class Platform {
    static setPlatformInformation(platform) {
        Platform.OS = platform.name();
        Platform.Version = platform.version();
    }

    static setLinking(linking) {
      Platform.linking = linking;
    }

    static canOpenUrl(url) {
      try {
        return Platform.linking.canOpenURL(url);
      } catch {
        return new Promise((resolve, reject) => reject({ message: 'Invalid format.' }));
      }
    }

    static openUrl(url) {
      return Platform.linking.openURL(url);
    }
}

export { Platform };
