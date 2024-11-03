import { FileStructure } from "../useFileStructure";

export const useCd = (currentPath: string, setCurrentPath: (path: string) => void, fileStructure: FileStructure) => {
    return (directory: string): string => {
      if (directory === "..") {
        const newPath = currentPath !== "/" ? currentPath.split("/").slice(0, -1).join("/") || "/" : "/";
        setCurrentPath(newPath);
        return newPath;
      } else {
        const newPath = `${currentPath}/${directory}`.replace(/\/\/+/g, '/');
        if (fileStructure[newPath]) {
          setCurrentPath(newPath);
          return '';
        }
        return `Directory '${directory}' not found.`;
      }
    };
  };