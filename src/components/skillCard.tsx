import {Image} from "@nextui-org/react";

export default function SkillCard({name, image}: {name:string, image:string}) {
    return (
        <div className="bg-foreground-50 p-3 w-20 h-20 md:w-24 md:h-24 aspect-square shadow-md border-1 border-foreground-100 items-center justify-center rounded-md mb-4 transition duration-500 ease-in-out hover:border-blue-400">
            <div className="flex justify-center">
                <Image className="rounded-none object-contain h-14 w-14 md:h-16 md:w-16 p-3 md:p-2 justify-center" src={"./" + image} removeWrapper />
            </div>
            <span className="bg-foreground-100 text-xss object-scale-down md:text-xs p-1 md:px-2 rounded-md outline-1 outline-foreground-100 shadow-sm">{name}</span>
        </div>
    );
}