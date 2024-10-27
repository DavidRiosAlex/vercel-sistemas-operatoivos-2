import React from 'react';

const LayoutComponent = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`w-screen h-screen ${className}`}>
            {children}
        </div>
    )
}

export default LayoutComponent;
