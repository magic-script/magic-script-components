class PlaneDetector {
  static setNativePlaneDetector(planeDetector) {
    PlaneDetector.nativePlaneDetector = planeDetector
  }

  static startDetecting(configuration) {
    PlaneDetector._assertNativePlaneDetector();

    // configuration sample: { planeType: ["horizontal", "vertical"] }
    PlaneDetector.nativePlaneDetector.startDetecting(configuration);
  }

  static stopDetecting(observer) {
    PlaneDetector._assertNativePlaneDetector();

    PlaneDetector.nativePlaneDetector.stopDetecting(observer);
  }

  static getAllPlanes(configuration, callback) {
    PlaneDetector._assertNativePlaneDetector();

    // configuration sample: { planeType: ["horizontal", "vertical"] }
    // callback sample (error, planes) => { }
    PlaneDetector.nativePlaneDetector.getAllPlanes(configuration, callback);
  }

  static reset() {
    PlaneDetector._assertNativePlaneDetector();

    PlaneDetector.nativePlaneDetector.reset();
  }

  static requestPlaneCast(configuration, callback) {
    PlaneDetector._assertNativePlaneDetector();

    // configuration sample: { planeType: "vertical", rayCastParameters: {...}] }
    // callback sample (error, planes) => { }
    PlaneDetector.nativePlaneDetector.requestPlaneCast(configuration, callback);
  }

  // callbacks registration
  static addOnPlaneDetectedObserver(observer, observerCallback) {
    PlaneDetector._assertNativePlaneDetector();

    // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
    PlaneDetector.nativePlaneDetector.addOnPlaneDetectedObserver(observer, observerCallback);
  }

  static addOnPlaneUpdatedObserver(observer, observerCallback) {
    PlaneDetector._assertNativePlaneDetector();

    // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
    PlaneDetector.nativePlaneDetector.addOnPlaneUpdatedObserver(observer, observerCallback);
  }

  static addOnPlaneRemovedObserver(observer, observerCallback) {
    PlaneDetector._assertNativePlaneDetector();

    // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
    PlaneDetector.nativePlaneDetector.addOnPlaneRemovedObserver(observer, observerCallback);
  }

  static addOnPlaneTappedObserver(observer, observerCallback) {
    PlaneDetector._assertNativePlaneDetector();

    // observerCallback sample data: Plane: { normal: [x, y, z], center: [x, y, z], vertices: [[x, y, z]], id: UUID, type: [String] }
    PlaneDetector.nativePlaneDetector.addOnPlaneTappedObserver(observer, observerCallback);
  }

  static _assertNativePlaneDetector() {
    if (typeof PlaneDetector.nativePlaneDetector === 'undefined') { console.error('NativePlaneDetector not set.'); }
  }
}

export { PlaneDetector };
