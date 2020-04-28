class FileSystem {
    static setNativeFileSystem(fileSystem) {
        FileSystem.nativeFileSystem = fileSystem;
    }

    static writeFile(path, content, encoding) {
        FileSystem.__assertFileSystem();
        return FileSystem.nativeFileSystem.writeFile(path, content, encoding);
    }

    static readFile(path, encoding) {
        FileSystem.__assertFileSystem();
        return FileSystem.nativeFileSystem.readFile(path, encoding);
    }

    static deleteFile(path) {
        FileSystem.__assertFileSystem();
        return FileSystem.nativeFileSystem.deleteFile(path);
    }

    static moveFile(srcPath, dstPath) {
        FileSystem.__assertFileSystem();
        return FileSystem.nativeFileSystem.moveFile(srcPath, dstPath);
    }

    static __assertFileSystem() {
        if(typeof FileSystem.nativeFileSystem === 'undefined') { console.error('Native FileSystem not set.'); }
    }
}

export { FileSystem };
