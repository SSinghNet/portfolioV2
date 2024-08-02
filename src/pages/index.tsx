import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { button as buttonStyles } from "@nextui-org/theme";

import { ProjectProps, siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { EmailIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, Divider, Tab, Tabs } from "@nextui-org/react";
import ProjectCard from "@/components/projectCard";
import SkillCard from "@/components/skillCard";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className="flex sm items-center justify-center">
                <div className="inline-block max-w-lg text-center justify-center bg-warning-100 p-2 border-warning-100 shadow rounded-md transition duration-500 ease-in-out border hover:border-warning-200 text-sm">
                    Looking for the OG SSingh.Net?<Link isExternal className={buttonStyles({ size: "sm", variant: "flat", radius: "sm", color: "warning" }) + " ml-2"} href="https://og.ssingh.net/">Click Here</Link>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-4 m-5 py-8 md:py-10 border-2 shadow-md rounded-md transition duration-500 ease-in-out hover:border-blue-400">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Sumeet Singh</h1>
                    <h4 className={subtitle({ class: "mt-4" })}>
                        Fullstack Developer
                    </h4>
                </div>

                <div className="flex gap-3 justify-center text-center">
                    <div className="col-span-3 p-0 m-0 sm:col-span-1">
                        <Tooltip
                            showArrow={true}
                            content={siteConfig.links.email}
                            placement="bottom"
                            closeDelay={500}
                            isDismissable={true}
                        >
                            <Link
                                isExternal
                                className={buttonStyles({ variant: "ghost", radius: "full" })}
                                href={"mailto:" + siteConfig.links.email}

                            >
                                <EmailIcon size={20} />
                                <span>Email</span>
                            </Link>
                        </Tooltip>
                    </div>
                </div>

                <div className="grid gap-1 justify-center text-center grid-cols-2">
                    <div className="col-span-2 p-0 m-0 sm:col-span-1">
                        <Link
                            isExternal
                            className={buttonStyles({ variant: "shadow", radius: "full" })}
                            href={siteConfig.links.github}
                        >
                            <GithubIcon size={20} />
                            GitHub
                        </Link>
                    </div>
                    <div className="col-span-2 p-0 m-0 sm:col-span-1">
                        <Link
                            isExternal
                            className={buttonStyles({ variant: "shadow", radius: "full" })}
                            href={siteConfig.links.linkedin}
                        >
                            <LinkedinIcon size={20} />
                            Linkedin
                        </Link>
                    </div>

                </div>
                <div className="gap-5 mt-5 mx-5 md:m-0 inline-block max-w-85 text-center justify-center transition duration-300 ease-in-out hover:scale-105">
                    <Card
                        radius="sm"
                        className="border-1 border-danger-200 p-3 px-5 text-small"
                        isBlurred
                    >
                        <i>One has no right to love or hate anything if one has not acquired a thorough knowledge of its nature.</i>
                        <span className="text-tiny mt-2">- Leonardo da Vinci</span>

                    </Card>
                </div>
            </section>

            {/*
            <section className="group flex items-center justify-center w-full">
                <div className="inline-block rounded-2xl w-full md:mx-36 sm:mx-12 text-center justify-center border transition duration-500 ease-in-out hover:border-blue-400">
                    <Card className="p-5 py-8 pt-4">
                        <CardHeader className="text-center justify-center">
                            <h1 className={"text-xl"}>
                                About Me
                            </h1>
                        </CardHeader>
                        <Divider className="my-3" />
                        <p>
                            I'm a self-taught developer and a student at Rutgers University, where I'm working towards a BS in Computer Science and a BS in Mathematics, planning to graduate in Fall 2026. With a passion for coding and problem-solving, I continuously seek out new challenges to enhance my skills and knowledge. My journey in technology is driven by curiosity and a commitment to lifelong learning, and I'm excited to apply my expertise to innovative projects and collaborations.
                        </p>
                    </Card>
                </div>
            </section>
            */}
            <Divider className="my-6" />

            <section className="group flex items-center justify-center w-full">
                <div className="inline-block rounded-md w-full my-0 text-center justify-center border-none outline-none">
                    <h1 className={"text-2xl text-left font-bold underline"}>
                        Technologies:
                    </h1>
                    <Card className="pt-4 bg-opacity-0 rounded-md border-none outline-none shadow-none">
                        <div className="m-1 md:m-5 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10 gap-4 justify-center">
                            {siteConfig.skills.map(({ name, image }: { name: string, image: string }) => (
                                <div className="flex justify-center">
                                    <SkillCard
                                        name={name}
                                        image={image}
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </section>

            <Divider className="my-6" />
            <section className="my-4 group w-full">
                <h1 className="text-2xl w-full font-bold underline">Professional Projects:</h1>
                <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {siteConfig.projects.professional.map((proj: ProjectProps) => (
                        <ProjectCard
                            title={proj.title}
                            subtitle={proj.subtitle}
                            desc={proj.desc}
                            github={proj.github}
                            demo={proj.demo}
                            chips={proj.chips}
                            image={proj.image}
                        />
                    ))}
                </div>
            </section>
            <Divider className="my-6" />
            <section className="my-4 group w-full">
                <h1 className="text-2xl w-full font-bold underline mb-3">Personal Projects:</h1>
                <Tabs aria-label="Projects" size="md" variant={"underlined"} fullWidth>
                    <Tab key="web" title="Web Projects">
                        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {siteConfig.projects.personal.web.map((proj: ProjectProps) => (
                                <ProjectCard
                                    title={proj.title}
                                    subtitle={proj.subtitle}
                                    desc={proj.desc}
                                    github={proj.github}
                                    demo={proj.demo}
                                    chips={proj.chips}
                                    image={proj.image}
                                />
                            ))}
                        </div>
                    </Tab>
                    <Tab key="mobile" title="Mobile Projects">
                        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {siteConfig.projects.personal.mobile.map((proj: ProjectProps) => (
                                <ProjectCard
                                    title={proj.title}
                                    subtitle={proj.subtitle}
                                    desc={proj.desc}
                                    github={proj.github}
                                    demo={proj.demo}
                                    chips={proj.chips}
                                    image={proj.image}
                                />
                            ))}
                        </div>
                    </Tab>
                    <Tab key="lowlevel" title="Low-Level Projects">
                        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {siteConfig.projects.personal.lowlevel.map((proj: ProjectProps) => (
                                <ProjectCard
                                    title={proj.title}
                                    subtitle={proj.subtitle}
                                    desc={proj.desc}
                                    github={proj.github}
                                    demo={proj.demo}
                                    chips={proj.chips}
                                    image={proj.image}
                                />
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </DefaultLayout>
    );
}
