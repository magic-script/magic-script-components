class PlaneDetector {
    static setNativePlaneDetector(planeDetector) {
        PlaneDetector.nativePlaneDetector = planeDetector
    }

    static startDetecting(configuration) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        // configuration sample: { planeType: ["horizontal", "vertical"] }
        PlaneDetector.nativePlaneDetector.startDetecting(configuration);
    }

    static stopDetecting(observer) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        PlaneDetector.nativePlaneDetector.stopDetecting(observer);
    }

    static getAllPlanes(configuration, callback) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        // configuration sample: { planeType: ["horizontal", "vertical"] }
        // callback sample (error, planes) => { }
        PlaneDetector.nativePlaneDetector.getAllPlanes(configuration, callback);
    }

    static reset() {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        PlaneDetector.nativePlaneDetector.reset();
    }

    static requestPlaneCast(configuration, callback) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        // configuration sample: { planeType: "vertical", rayCastParameters: {...}] }
        // callback sample (error, planes) => { }
        PlaneDetector.nativePlaneDetector.requestPlaneCast(configuration, callback);
    }

    // callbacks registration
    static addOnPlaneDetectedObserver(observer, observerCallback) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
        PlaneDetector.nativePlaneDetector.addOnPlaneDetectedObserver(observer, observerCallback);
    }

    static addOnPlaneUpdatedObserver(observer, observerCallback) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
        PlaneDetector.nativePlaneDetector.addOnPlaneUpdatedObserver(observer, observerCallback);
    }

    static addOnPlaneRemovedObserver(observer, observerCallback) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
        PlaneDetector.nativePlaneDetector.addOnPlaneRemovedObserver(observer, observerCallback);
    }

    static addOnPlaneTappedObserver(observer, observerCallback) {
        if (typeof PlaneDetector.nativePlaneDetector == 'undefined') { console.error("NativePlaneDetector not set."); }

        // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
        PlaneDetector.nativePlaneDetector.addOnPlaneTappedObserver(observer, observerCallback);
    }
}

export { PlaneDetector };