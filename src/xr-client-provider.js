class XrClientProvider {
    static setXrClient(xrClient) {
        XrClientProvider.xrClient = xrClient;
    }

    static getXrClient() {
        return XrClientProvider.xrClient;
    }
}

export { XrClientProvider };
