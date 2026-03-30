import { Image, Tooltip, Chip } from "@nextui-org/react";
import { DemoIcon, GithubIcon } from "./icons";
import { Link } from "@nextui-org/link";

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
            <div className="w-full card transition duration-500 ease-in-out overflow-hidden flex flex-col h-full" style={{ borderColor: 'rgba(181, 157, 217, 0.2)' }}>

                <div className="m-0 p-0 relative flex justify-center">
                    <div className="flex h-48 m-0 p-0 w-full rounded-none justify-center shadow-md" style={{ background: 'var(--card-bg)' }}>
                        {image ?
                            <Image
                                className="h-48 object-cover rounded-none m-0 p-0"
                                src={"./" + image}
                                shadow="none"
                            />
                            :

                            <span className="content-center text-xl max-w-fit" style={{ color: 'var(--text-primary)' }}>
                                {title}
                            </span>
                        }

                    </div>
                </div>
                <div className="flex gap-2 px-4 pt-3 pb-2">
                    {demo ?
                        <Tooltip content="Demo" showArrow={true}>
                            <Link isExternal href={demo} className="flex items-center justify-center px-3 py-2 rounded-lg font-semibold transition hover:opacity-80" style={{ background: 'var(--accent)', color: 'var(--bg-start)' }}>
                                <DemoIcon className="p-0 m-0" size={18} />
                            </Link>
                        </Tooltip>
                        : ""
                    }
                    {github ?
                        <Tooltip content="GitHub" showArrow={true}>
                            <Link isExternal href={github} className="flex items-center justify-center px-3 py-2 rounded-lg font-semibold transition hover:opacity-80" style={{ background: 'var(--muted)', color: 'var(--bg-start)' }}>
                                <GithubIcon className="p-0 m-0" size={18} />
                            </Link>
                        </Tooltip>
                        : ""
                    }
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h1>
                    <h2 className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{subtitle}</h2>
                    <p className="text-sm my-2" style={{ color: 'var(--muted)' }}>{desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 px-4 pb-4">
                    {chips.map((str, idx) => (
                        <Chip key={idx} radius="full" className="text-xs" style={{ background: 'var(--card-bg)', color: 'var(--accent-strong)', fontWeight: '600', border: '1px solid var(--accent)' }}>{str}</Chip>
                    ))}
                </div>
            </div>
        </div>
    );
}