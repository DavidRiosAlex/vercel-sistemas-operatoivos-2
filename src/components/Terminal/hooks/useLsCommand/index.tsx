import { useCat } from "../useCat";

const getSize = (str: string) => new TextEncoder().encode(str).length;

export const useLs = (getCurrentFolder: () => string[], currentPath: string) => {

    const cat = useCat(currentPath);
    return (options = ""): JSX.Element | JSX.Element[] => {                 
        let result: JSX.Element | JSX.Element[] | string | string[] = [...getCurrentFolder()];

        // Display help message if --help is present
        if (options.includes("--help")) {
            return (<p>
                    Usage: ls [options]
                    Options:
                    <br></br>
                    &emsp;&emsp;&emsp;-a      Include hidden files (files starting with .)
                    <br></br>
                    &emsp;&emsp;&emsp;-l      Display detailed information (permissions, owner, size, modified date)
                    <br></br>
                    &emsp;&emsp;&emsp;-t      Sort files randomly
                    <br></br>
                    &emsp;&emsp;&emsp;-r      Reverse the order of files
                    <br></br>
                    &emsp;&emsp;&emsp;--help  Show this help message
                </p>) as JSX.Element;
            }

        const parsedOptions = options.replace(/-/g, "");

        if (!parsedOptions.includes("a")) {
            result = result.filter(file => !file.startsWith("."));
        }

        if (parsedOptions.includes("l")) {
            result = result.map(file => {
                const stats = {
                    permissions: "rw-r--r--",
                    owner: "user",
                    size: `${getSize(cat(`${currentPath}/${file}`))}B`,
                    modified: new Date().toLocaleString(),
                };
                return (
                    <p key={file}>
                        {`${stats.permissions} ${stats.owner} ${stats.size} ${stats.modified} ${file}`}
                        <br></br>
                    </p>
                ) as JSX.Element;
            }) as JSX.Element[];
        }

        if (parsedOptions.includes("t")) {
            result.sort(() => Math.random() - 0.5);
        }

        if (parsedOptions.includes("r")) {
            result.reverse();
        }

        return (result.length > 0 ? result.map((elem, i) => (<span key={i}>{elem}&emsp;</span>)) : <br></br>) as JSX.Element;
    };
};
