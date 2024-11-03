/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface NanoContextType {
    openNanoEditor: (fileName: string, options: { currentPath: string; getCurrentFolder: () => string[]; touch: (fileName: string) => string }) => void;
}

const NanoContext = createContext<NanoContextType | undefined>(undefined);

export const useNano = ({ currentPath, getCurrentFolder, touch }: { currentPath: string; getCurrentFolder: () => string[]; touch: (fileName: string) => string }) => {
    const context = useContext(NanoContext);
    if (!context) {
        throw new Error('useNano must be used within a NanoProvider');
    }
    return (fileName: string) => context.openNanoEditor(fileName, { currentPath, getCurrentFolder, touch });
};

interface NanoProviderProps {
    children: ReactNode;
}

export const NanoProvider: React.FC<NanoProviderProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFile, setCurrentFile] = useState<string | null>(null);
    const [currentPath, setCurrentPath] = useState<string>("");

    const openNanoEditor = (
        fileName: string,
        { currentPath, getCurrentFolder, touch }: { currentPath: string; getCurrentFolder: () => string[]; touch: (fileName: string) => string }
    ) => {
        // Save the context-specific functions and path
        setCurrentPath(currentPath);

        const files = getCurrentFolder();
        if (!files.includes(fileName)) {
            touch(fileName); // Ensure the file exists
        }

        setCurrentFile(fileName);
        setIsModalOpen(true);
    };

    const saveContent = (e: any): void => {
        e.preventDefault();
        if (currentFile) {
            const fullPath = `${currentPath}/${currentFile}`.replace(/\/\/+/g, '/');
            sessionStorage.setItem(fullPath, e.target.nano.value);
            setIsModalOpen(false);
            setCurrentFile(null);
        }
    };

    const cancelEdit = () => {
        setIsModalOpen(false);
        setCurrentFile(null);
    };
    

    const renderModal = () => {
        if (!isModalOpen) return null;
        return ReactDOM.createPortal(
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <form className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4" onSubmit={saveContent}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit File Content</h2>
                    <textarea
                        name="nano"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter file content here..."
                    />
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                        >
                            Save
                        </button>
                        <button
                            onClick={cancelEdit}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>,
            document.getElementById('portal-root') as HTMLElement
        );
    };

    return (
        <NanoContext.Provider value={{ openNanoEditor }}>
            {children}
            {renderModal()}
        </NanoContext.Provider>
    );
};