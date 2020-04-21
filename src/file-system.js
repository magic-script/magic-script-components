class FileSystem {
    static setNativeFileSystem(fileSystem) {
        FileSystem.nativeFileSystem = fileSystem;
    }

    static writeFile(path, content, encoding) {
        return FileSystem.nativeFileSystem.writeFile(path, content, encoding);
    }

    static readFile(path, encoding) {
        return FileSystem.nativeFileSystem.readFile(path, encoding);
    }

    static deleteFile(path) {
        return FileSystem.nativeFileSystem.deleteFile(path);
    }

    static moveFile(srcPath, dstPath) {
        return FileSystem.nativeFileSystem.moveFile(srcPath, dstPath);
    }

    static __assertFileSystem() {
        if(typeof FileSystem.nativeFileSystem === 'undefined') { console.error('Native FileSystem not set.'); }
    }
}

export { FileSystem };
