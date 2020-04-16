class FileSystem {
    static setNativeFileSystem(fileSystem) {
        FileSystem.nativeFileSystem = fileSystem
    }

    static writeFile(path, content, encoding) {
        return FileSystem.nativeFileSystem.writeFile(path, content, encoding)
    }

    static readFile(path, encoding) {
        return FileSystem.nativeFileSystem.readFile(path, encoding)
    }

    static __assertFileSystem() {
        if(typeof FileSystem.nativeFileSystem === 'undefined') { console.error('Native FileSystem not set.') }
    }
}

export { FileSystem };
