import { useCallback, useState } from 'react';

export interface FileStructure {
    [key: string]: string[];
}

export const useFileStructure = () => {
    const [fileStructure, setFileStructure] = useState<FileStructure>({
      "/": ["home", "var", "etc"],
      "/home": ["guest", "documents", "downloads"],
      "/home/guest": ["file1.txt", "file2.txt"],
      "/home/documents": ["resume.pdf", "cover_letter.docx"],
      "/home/downloads": [],
      "/var": ["log"],
      "/var/log": ["system.log", "error.log"],
      "/etc": [],
    });
    return { fileStructure, setFileStructure };
};

export const useCurrentPath = () => {
    const [currentPath, setCurrentPath] = useState<string>("/");
    return { currentPath, setCurrentPath };
};

export const useGetCurrentFolder = (currentPath: string, fileStructure: FileStructure) => {
    return useCallback((): string[] => {
        return fileStructure[currentPath] || [];
    }, [currentPath, fileStructure]);
};