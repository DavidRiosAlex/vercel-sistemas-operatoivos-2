import { FileStructure } from "../useFileStructure";

export const useMkdir = (
  currentPath: string, 
  setFileStructure: (update: (prev: FileStructure) => FileStructure) => void, 
  fileStructure: FileStructure
) => {
  return (folderName: string): string => {
    const newPath = `${currentPath}/${folderName}`.replace(/\/\/+/g, '/');

    if (fileStructure[newPath]) {
      return "Folder already exists";
    } else {
      setFileStructure((prev: FileStructure) => {
        // Ensure `prev[currentPath]` exists as an array before updating it
        const updatedCurrentPath = prev[currentPath] ? [...prev[currentPath], folderName] : [folderName];
        
        return {
          ...prev,
          [newPath]: [],              // Create the new folder as an empty array
          [currentPath]: updatedCurrentPath, // Update the current path with the new folder
        };
      });
      return `Folder '${folderName}' created`;
    }
  };
};