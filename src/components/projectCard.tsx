import { Card, CardBody, CardFooter, CardHeader, Chip, Image, Tooltip } from "@nextui-org/react";
import { DemoIcon, GithubIcon } from "./icons";
import { Link } from "@nextui-org/link";

import { button as buttonStyles } from "@nextui-org/theme";
import { ProjectProps } from "@/config/site";

export default function ProjectCard({
    title,
    subtitle,
    desc,
    chips,
    github,
    demo,
    image,
}: ProjectProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <Card className="w-full border-1 border-foreground-100 transition duration-500 ease-in-out hover:border-blue-400 h-full flex" shadow="md" disableAnimation={true}>

                <CardHeader className="m-0 p-0 static justify-center">
                    {image ?
                        <Image
                            className="h-48 max-w-fit m-0 p-0 rounded-none justify-center"
                            src={"./" + image}
                            shadow="sm"
                        />
                        : 
                        <div className="flex h-48 m-0 p-0 border-1 border-foreground-100 w-full rounded-none justify-center shadow-md">
                            <span className="content-center text-xl max-w-fit">
                                {title}
                            </span>
                        </div>
                    }
                    {github ?
                        <Tooltip content="GitHub" showArrow={true}>
                            <Link isExternal href={github} className={buttonStyles({ variant: "light", radius: "full" }) + " bg-foreground-100 w-min min-w-10 p-0 text-sm absolute bottom-2 right-2 z-10"}>
                                <GithubIcon className="p-0 m-0"/>
                            </Link>
                        </Tooltip>
                        : ""
                    }
                    {demo ?
                        <Tooltip content="Demo" showArrow={true}>
                            <Link isExternal href={demo} className={buttonStyles({ variant: "light", radius: "full" }) + " bg-foreground-100 w-min min-w-10 p-0 text-sm absolute bottom-2 left-2 z-10"}>
                                <DemoIcon className="p-0 m-0" />
                            </Link>
                        </Tooltip>
                        : ""
                    }
                </CardHeader>
                <CardBody className="content-center">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <h1 className="text-medium font-medium">{subtitle}</h1>
                    <p className="text-sm my-1">{desc}</p>
                </CardBody>

                <CardFooter className="gap-1 text-center justify-center w-full block">
                    {chips.map((str) => (
                        <Chip radius="full" className="p-0 text-xs m-1">{str}</Chip>
                    ))}
                </CardFooter>
                <div className="mb-14"></div>
            </Card>
        </div>
    );
}