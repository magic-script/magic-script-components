class Platform {
    static setNativeModule(module) {
        Platform.OS = module.platformName();
        Platform.Version = module.platformVersion();
    }
}

export { Platform };
