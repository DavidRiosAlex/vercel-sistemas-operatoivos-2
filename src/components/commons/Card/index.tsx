import Image from "next/image";
import { ReactNode } from "react";

const Card = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`max-w-sm min-w-[350px] min-h-[500px] h-full flex flex-col justify-between align-center rounded overflow-hidden shadow-lg bg-white ${className}`}>
            {children}
        </div>
    )
};

Card.CardImg = ({ src, alt }: { src: string, alt: string, className?: string  }) => (
    <Image className="w-full" src={src} alt={alt} width={600} height={600} />
);

Card.Title = ({ children, className }: { children: ReactNode, className?: string }) => (
    <div className={"font-bold text-xl mb-2 " + className}>
        {children}
    </div>
);

Card.CardDescription = ({ children, className }: { children: ReactNode, className?: string }) => (
    <p className={"text-gray-700 text-base " + className}>
        {children}
    </p>
);

Card.CardFooter = ({ tags, className }: { tags: { label: string, link?: string }[], className?: string  }) => (
    <div className={"px-6 pt-4 pb-2 " + className}>
        {tags.map((tag, index) => (
            <a key={index} href={tag.link} target="_blank">
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag.label}
                </span>
            </a>
        ))}
    </div>
);

export default Card;
