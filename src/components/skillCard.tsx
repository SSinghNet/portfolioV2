import {Image} from "@nextui-org/react";

export default function SkillCard({name, image}: {name:string, image:string}) {
    return (
        <div className="bg-foreground-50 p-3 w-24 h-24 md:w-28 md:h-28 aspect-square shadow-2xl border-1 border-foreground-100 items-center justify-center rounded-md mb-4 transition duration-500 ease-in-out hover:border-blue-400">
            <div className="flex justify-center">
                <Image className="rounded-none object-contain h-16 w-16 md:h-20 md:w-20 p-5 justify-center" src={"./" + image} removeWrapper />
            </div>
            <span className="bg-foreground-100 p-1 md:px-2 text-sm rounded-md border-1 border-foreground-100 shadow-sm">{name}</span>
        </div>
    );
}