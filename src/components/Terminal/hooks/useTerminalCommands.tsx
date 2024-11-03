/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React from 'react';
import { useLs } from './useLsCommand';
import { useCd } from './useCd';
import { useMkdir } from './useMkdir';
import { useTouch } from './useTouch';
import { useCat } from './useCat';
import { useCurrentPath, useFileStructure, useGetCurrentFolder } from './useFileStructure';
import { useNano } from '../Provider/NanoProvider';

interface Commands {
  [command: string]: Function | JSX.Element;
}

export const useTerminalCommands = (): [Commands, string] => {
  const { currentPath, setCurrentPath } = useCurrentPath();
  const { fileStructure, setFileStructure } = useFileStructure();
  const getCurrentFolder = useGetCurrentFolder(currentPath, fileStructure);

  const ls = useLs(getCurrentFolder, currentPath);
  const cd = useCd(currentPath, setCurrentPath, fileStructure);
  const mkdir = useMkdir(currentPath, setFileStructure, fileStructure);
  const touch = useTouch(currentPath, getCurrentFolder, setFileStructure);
  const nano = useNano({currentPath, getCurrentFolder, touch});
  const cat = useCat(currentPath);

  const commands: Commands = {
    ls,
    cd,
    mkdir,
    touch,
    nano,
    cat,
    pwd: () => currentPath,
    echo: (content: string) => content,
    help: (
      <div>
        <p>Commands available:</p>
        <ul>
          <li><strong>ls [options]</strong> - Lists files and directories in the current directory</li>
          <li><strong>cd [directory]</strong> - Changes directory</li>
          <li><strong>mkdir [folder]</strong> - Creates a new folder</li>
          <li><strong>touch [file]</strong> - Creates a new file</li>
          <li><strong>nano [file]</strong> - Opens a file in editor mode</li>
          <li><strong>cat [file]</strong> - Displays content of a file</li>
          <li><strong>pwd</strong> - Displays the current directory path</li>
          <li><strong>help</strong> - Displays this help message</li>
        </ul>
      </div>
    ),
  };

  return [commands, currentPath];
};