import { XrClientProvider } from "../src/xr-client-provider";

const XRClientMock = {};

describe("XrClientProvider", () => {
  describe("when XrClient set", () => {
    beforeEach(() => {
      XrClientProvider.setXrClient(XRClientMock);
    });

    test("should store it internally", () => {
      expect(XrClientProvider.xrClient).toBe(XRClientMock);
    });

    test("should return it when requested", () => {
      expect(XrClientProvider.getXrClient()).toBe(XRClientMock);
    });
  });
});
