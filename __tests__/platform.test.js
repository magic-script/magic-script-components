import { Platform } from "../src/platform";

const NativePlatformInformationMock = {
  name: jest.fn(),
  version: jest.fn(),
};

const NativePlatformLinkingMock = {
  canOpenURL: jest.fn(),
  openURL: jest.fn(),
};

describe("Platform", () => {
  describe("Platform Information", () => {
    describe("when NativePlatformInformation set", () => {
      test("should grab system information (OS name, version)", () => {
        Platform.setPlatformInformation(NativePlatformInformationMock);
        expect(NativePlatformInformationMock.name).toHaveBeenCalled();
        expect(NativePlatformInformationMock.version).toHaveBeenCalled();
      });

      test("should store system information (OS name, version)", () => {
        const OSname = "OSname";
        NativePlatformInformationMock.name.mockImplementation(() => OSname);
        const OSversion = "OSversion";
        NativePlatformInformationMock.version.mockImplementation(
          () => OSversion
        );
        Platform.setPlatformInformation(NativePlatformInformationMock);
        expect(Platform.OS).toBe(OSname);
        expect(Platform.Version).toBe(OSversion);
      });
    });
  });

  describe("Platform Linking", () => {
    describe("when no NativePlatformLinking set", () => {
      const originalError = console.error;
      afterEach(() => (console.error = originalError));

      let consoleOutput = [];
      const mockedError = (output) => consoleOutput.push(output);
      beforeEach(() => (console.error = mockedError));

      test("should console error", () => {
        Platform._assertLinking();
        expect(consoleOutput).toEqual(["Platform.Linking not set."]);
      });
    });

    describe("when initialized in correct way", () => {
      const URL = "URL";

      beforeEach(() => {
        Platform.setLinking(NativePlatformLinkingMock);
      });

      describe("canOpenUrl call", () => {
        test("should be delegated", () => {
          Platform.canOpenUrl(URL);
          expect(NativePlatformLinkingMock.canOpenURL).toHaveBeenCalledWith(
            URL
          );
        });

        test("should return Promise with reject when fail", () => {
          NativePlatformLinkingMock.canOpenURL.mockImplementation(() => { throw Error; });
          Platform.canOpenUrl("").then((resolve, reject) => {
            expect(resolve).toBe(undefined);
            expect(reject).toBe({ message: "Invalid format."});
          }).catch(() => {});
        });
      });

      describe("openUrl call", () => {
        test("should be delegated", () => {
          Platform.openUrl(URL);
          expect(NativePlatformLinkingMock.openURL).toHaveBeenCalledWith(URL);
        });
      });
    });
  });
});
