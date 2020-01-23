class PlaneDetector {
    static setNativePlaneDetector(planeDetector) {
        PlaneDetector.nativePlaneDetector = planeDetector
    }

    static instance() {
        return PlaneDetector.nativePlaneDetector
    }
}

export { PlaneDetector };
