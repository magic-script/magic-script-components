// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import { FileSystem } from "../src/file-system";

const NativeFileSystemMock = {
  writeFile: jest.fn(),
  readFile: jest.fn(),
  deleteFile: jest.fn(),
  moveFile: jest.fn(),
  __assertFileSystem: jest.fn(),
};

describe("FileSystem", () => {
  describe("when no NativeFileSystem set", () => {
    const originalError = console.error;
    afterEach(() => (console.error = originalError));

    let consoleOutput = [];
    const mockedError = (output) => consoleOutput.push(output);
    beforeEach(() => (console.error = mockedError));

    test("should console error", () => {
      FileSystem.__assertFileSystem();
      expect(consoleOutput).toEqual(["Native FileSystem not set."]);
    });
  });

  describe("when native file system set", () => {
    test("should store it internally", () => {
      FileSystem.setNativeFileSystem(NativeFileSystemMock);
      expect(FileSystem.nativeFileSystem).toBe(NativeFileSystemMock);
    });
  });

  describe("when initialized in correct way", () => {
    const path = "path";
    const content = "content";
    const encoding = "encoding";
    const srcPath = "srcPath";
    const dstPath = "dstPath";

    beforeEach(() => {
      FileSystem.setNativeFileSystem(NativeFileSystemMock);
    });

    describe("writeFile call", () => {
      test("should be delegated", () => {
        FileSystem.writeFile(path, content, encoding);
        expect(NativeFileSystemMock.writeFile).toHaveBeenCalledWith(
          path,
          content,
          encoding
        );
      });
    });

    describe("readFile call", () => {
      test("should be delegated", () => {
        FileSystem.readFile(path, encoding);
        expect(NativeFileSystemMock.readFile).toHaveBeenCalledWith(
          path,
          encoding
        );
      });
    });

    describe("deleteFile call", () => {
      test("should be delegated", () => {
        FileSystem.deleteFile(path);
        expect(NativeFileSystemMock.deleteFile).toHaveBeenCalledWith(path);
      });
    });

    describe("moveFile call", () => {
      test("should be delegated", () => {
        FileSystem.moveFile(srcPath, dstPath);
        expect(NativeFileSystemMock.moveFile).toHaveBeenCalledWith(
          srcPath,
          dstPath
        );
      });
    });
  });
});
