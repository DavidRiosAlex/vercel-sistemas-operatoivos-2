import React from 'react';

const LayoutComponent = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
    return (
        <div id={id} className={`w-screen h-auto sm:h-screen ${className}`}>
            {children}
        </div>
    )
}

export default LayoutComponent;
