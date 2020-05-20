import { PlaneDetector } from "../src/plane-detector";

const NativePlaneDetectorMock = {
  startDetecting: jest.fn(),
  stopDetecting: jest.fn(),
  getAllPlanes: jest.fn(),
  reset: jest.fn(),
  requestPlaneCast: jest.fn(),
  addOnPlaneDetectedObserver: jest.fn(),
  addOnPlaneUpdatedObserver: jest.fn(),
  addOnPlaneRemovedObserver: jest.fn(),
  addOnPlaneTappedObserver: jest.fn(),
};

describe("PlaneDetector", () => {
  describe("when no NativePlaneDetector set", () => {
    const originalError = console.error;
    afterEach(() => (console.error = originalError));

    let consoleOutput = [];
    const mockedError = (output) => consoleOutput.push(output);
    beforeEach(() => (console.error = mockedError));

    test("should console error", () => {
      PlaneDetector._assertNativePlaneDetector();
      expect(consoleOutput).toEqual(["NativePlaneDetector not set."]);
    });
  });

  describe("when native plane detector set", () => {
    test("should store it internally", () => {
      PlaneDetector.setNativePlaneDetector(NativePlaneDetectorMock);
      expect(PlaneDetector.nativePlaneDetector).toBe(NativePlaneDetectorMock);
    });
  });

  describe("when initialized in correct way", () => {
    const configuration = {};
    const observer = { id: "observerId" };
    const callback = () => {};

    beforeEach(() => {
      PlaneDetector.setNativePlaneDetector(NativePlaneDetectorMock);
    });

    describe("startDetecting call", () => {
      test("should be delegated", () => {
        PlaneDetector.startDetecting(configuration);
        expect(NativePlaneDetectorMock.startDetecting).toHaveBeenCalledWith(
          configuration
        );
      });
    });

    describe("stopDetecting call", () => {
      test("should be delegated", () => {
        PlaneDetector.stopDetecting(observer);
        expect(NativePlaneDetectorMock.stopDetecting).toHaveBeenCalledWith(
          observer
        );
      });
    });

    describe("getAllPlanes call", () => {
      test("should be delegated", () => {
        PlaneDetector.getAllPlanes(configuration, callback);
        expect(NativePlaneDetectorMock.getAllPlanes).toHaveBeenCalledWith(
          configuration,
          callback
        );
      });
    });

    describe("reset call", () => {
      test("should be delegated", () => {
        PlaneDetector.reset();
        expect(NativePlaneDetectorMock.reset).toHaveBeenCalled();
      });
    });

    describe("requestPlaneCast call", () => {
      test("should be delegated", () => {
        PlaneDetector.requestPlaneCast(configuration, callback);
        expect(NativePlaneDetectorMock.requestPlaneCast).toHaveBeenCalledWith(
          configuration,
          callback
        );
      });
    });

    describe("addOnPlaneDetectedObserver call", () => {
      test("should be delegated", () => {
        PlaneDetector.addOnPlaneDetectedObserver(observer, callback);
        expect(
          NativePlaneDetectorMock.addOnPlaneDetectedObserver
        ).toHaveBeenCalledWith(observer, callback);
      });
    });

    describe("addOnPlaneUpdatedObserver call", () => {
      test("should be delegated", () => {
        PlaneDetector.addOnPlaneUpdatedObserver(observer, callback);
        expect(
          NativePlaneDetectorMock.addOnPlaneUpdatedObserver
        ).toHaveBeenCalledWith(observer, callback);
      });
    });

    describe("addOnPlaneRemovedObserver call", () => {
      test("should be delegated", () => {
        PlaneDetector.addOnPlaneRemovedObserver(observer, callback);
        expect(
          NativePlaneDetectorMock.addOnPlaneRemovedObserver
        ).toHaveBeenCalledWith(observer, callback);
      });
    });

    describe("addOnPlaneTappedObserver call", () => {
      test("should be delegated", () => {
        PlaneDetector.addOnPlaneTappedObserver(observer, callback);
        expect(
          NativePlaneDetectorMock.addOnPlaneTappedObserver
        ).toHaveBeenCalledWith(observer, callback);
      });
    });
  });
});
