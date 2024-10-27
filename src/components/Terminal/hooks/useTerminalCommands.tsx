import React, { useCallback, useState } from 'react';

interface FileStructure {
  [key: string]: string[];
}

interface Commands {
  [command: string]: Function | JSX.Element;
}

export const useTerminalCommands = (): [Commands, string] => {
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [fileStructure, setFileStructure] = useState<FileStructure>({
    "/": ["home", "var", "etc"],
    "/home": ["guest", "documents", "downloads"],
    "/home/guest": ["file1.txt", "file2.txt"],
    "/home/documents": ["resume.pdf", "cover_letter.docx"],
    "/var": ["log"],
    "/var/log": ["system.log", "error.log"],
    "/etc": [],
  });

  const getCurrentFolder = useCallback((): string[] => {
    return fileStructure[currentPath] || [];
  }, [currentPath, fileStructure]);

  const touch = (fileName: string): string => {
        const fullPath = `${currentPath}/${fileName}`;
        const files = getCurrentFolder();
        if (files.includes(fileName)) {
        return `File '${fileName}' already exists.`;
        } else {
        setFileStructure(prev => ({
            ...prev,
            [currentPath]: [...prev[currentPath], fileName]
        }));
        sessionStorage.setItem(fullPath, '');  // Create an empty file in session storage
        return `File '${fileName}' created.`;
        }
    }

  const commands: Commands = {
    ls: (): string => {
      const folderContent = getCurrentFolder();
      return folderContent.length > 0 ? folderContent.join("  ") : "Directorio vacío";
    },
    cd: (directory: string): string => {
      if (directory === "..") {
        const newPath = currentPath !== "/" ? currentPath.split("/").slice(0, -1).join("/") || "/" : "/";
        setCurrentPath(newPath);
        return `Moved to: ${newPath}`;
      } else {
        const newPath = `${currentPath}/${directory}`.replace(/\/\/+/g, '/');
        if (fileStructure[newPath]) {
          setCurrentPath(newPath);
          return `Moved to: ${newPath}`;
        }
        return `Directory '${directory}' not found.`;
      }
    },
    mkdir: (folderName: string): string => {
      const newPath = `${currentPath}/${folderName}`.replace(/\/\/+/g, '/');
      if (fileStructure[newPath]) {
        return "Folder already exists";
      } else {
        setFileStructure(prev => ({
          ...prev,
          [newPath]: [],
          [currentPath]: [...prev[currentPath], folderName]
        }));
        return `Folder '${folderName}' created`;
    }
    },
    pwd: (): string => currentPath,
    help: (
      <div>
        <p>Commands available:</p>
        <ul>
          <li><strong>ls</strong> - Lists files and directories in the current directory</li>
          <li><strong>cd [directory]</strong> - Changes directory</li>
          <li><strong>mkdir [folder]</strong> - Creates a new folder</li>
          <li><strong>touch [file]</strong> - Creates a new folder</li>
          <li><strong>nano [file]</strong> - Creates a new folder</li>
          <li><strong>cat [file]</strong> - Creates a new folder</li>
          <li><strong>pwd</strong> - Displays the current directory path</li>
          <li><strong>help</strong> - Displays this help message</li>
          <li><strong>clear</strong> - Clears the terminal</li>
        </ul>
      </div>
    ),
    touch,
    nano: (fileName: string): string => {
        const fullPath = `${currentPath}/${fileName}`.replace(/\/\/+/g, '/');
        const files = getCurrentFolder();
        if (!files.includes(fileName)) {
          touch(fileName);  // Ensure the file exists
        }
        sessionStorage.setItem(fullPath, "Hello World! :)");  // Save content to session storage
        return `Content written to '${fileName}'.`;
    },
    cat: (file: string) => {
        const fullPath = `${currentPath}/${file}`.replace(/\/\/+/g, '/');
        return sessionStorage.getItem(fullPath);
    }
  };
  return [commands, currentPath];
};