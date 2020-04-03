class Platform {
    static setPlatformInformation(platform) {
        Platform.OS = platform.name();
        Platform.Version = platform.version();
    }

    static setLinking(linking) {
      Platform.linking = linking;
    }

    static canOpenUrl(url) {
      return Platform.linking.canOpenURL(url);
    }

    static openUrl(url) {
      return Platform.linking.openURL(url);
    }
}

export { Platform };
