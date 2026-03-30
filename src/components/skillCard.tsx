import {Image} from "@nextui-org/react";

export default function SkillCard({name, image}: {name:string, image:string}) {
    return (
        <div className="bg-foreground-50 p-3 w-30 h-30 md:w-34 md:h-34 aspect-square shadow-md border-1 border-foreground-100 flex flex-col items-center justify-center rounded-md mb-4 transition duration-500 ease-in-out hover:border-blue-400">
            <div className="flex justify-center">
                <Image className="rounded-none object-contain h-14 w-14 md:h-16 md:w-16 p-3 md:p-2" src={"./" + image} removeWrapper />
            </div>
            <span className="bg-foreground-100 text-xss object-scale-down md:text-xs p-1 md:px-2 rounded-md outline-1 outline-foreground-100 shadow-sm text-center" style={{color: 'var(--text-primary)'}}>{name}</span>
        </div>
    );
}