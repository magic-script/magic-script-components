class FileSystem {
    static setNativeFileSystem(fileSystem) {
        FileSystem.nativeFileSystem = fileSystem;
    }

    static writeFile(path, content, encoding) {
        __assertFileSystem();
        return FileSystem.nativeFileSystem.writeFile(path, content, encoding);
    }

    static readFile(path, encoding) {
        __assertFileSystem();
        return FileSystem.nativeFileSystem.readFile(path, encoding);
    }

    static deleteFile(path) {
        __assertFileSystem();
        return FileSystem.nativeFileSystem.deleteFile(path);
    }

    static moveFile(srcPath, dstPath) {
        __assertFileSystem();
        return FileSystem.nativeFileSystem.moveFile(srcPath, dstPath);
    }

    static __assertFileSystem() {
        if(typeof FileSystem.nativeFileSystem === 'undefined') { console.error('Native FileSystem not set.'); }
    }
}

export { FileSystem };
