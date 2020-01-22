class Platform {
    static setPlatformInformation(platform) {
        Platform.OS = platform.name();
        Platform.Version = platform.version();
    }
}

export { Platform };
