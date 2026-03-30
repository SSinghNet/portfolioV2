import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { siteConfig } from "@/config/site";
import { EmailIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@nextui-org/react";
import ProjectCard from "@/components/projectCard";
import SkillCard from "@/components/skillCard";
import CertificateCard from "@/components/certificateCard";
import EducationCard from "@/components/educationCard";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center w-full space-y-8">

                {/* Hero */}
                <section className="w-full flex items-center justify-center pt-16 pb-8">
                    <div className="max-w-3xl w-full text-center rounded-2xl shadow-lg p-8 border card">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: 'var(--accent-strong)' }}>Sumeet Singh</h1>
                        <h2 className="text-lg md:text-xl font-medium mb-4" style={{ color: 'var(--accent)' }}>Backend Software Engineer</h2>
                        {/* <p className="mb-6" style={{ color: 'var(--muted)' }}>
                            Building scalable, reliable systems and elegant developer experiences — cloud, APIs, and open source.
                        </p> */}

                        <div className="flex flex-wrap justify-center gap-3">
                            <Tooltip showArrow content={siteConfig.links.email} placement="bottom" closeDelay={300} isDismissable>
                                <Link isExternal className="rounded-full px-4 py-2 flex items-center gap-2 font-semibold transition" style={{ background: 'rgba(26, 26, 46, 0.12)', color: 'var(--accent-strong)' }} href={`mailto:${siteConfig.links.email}`}>
                                    <EmailIcon size={18} /> Email
                                </Link>
                            </Tooltip>

                            <Tooltip showArrow content={siteConfig.links.github} placement="bottom" closeDelay={300} isDismissable>
                                <Link isExternal className="rounded-full px-4 py-2 flex items-center gap-2 font-semibold transition" style={{ background: 'rgba(26, 26, 46, 0.12)', color: 'var(--accent-strong)' }} href={siteConfig.links.github}>
                                    <GithubIcon size={18} /> GitHub
                                </Link>
                            </Tooltip>

                            <Tooltip showArrow content={siteConfig.links.linkedin} placement="bottom" closeDelay={300} isDismissable>
                                <Link isExternal className="rounded-full px-4 py-2 flex items-center gap-2 font-semibold transition" style={{ background: 'rgba(26, 26, 46, 0.12)', color: 'var(--accent-strong)' }} href={siteConfig.links.linkedin}>
                                    <LinkedinIcon size={18} /> LinkedIn
                                </Link>
                            </Tooltip>

                            <Link
                                isExternal
                                className="rounded-full px-4 py-2 flex items-center gap-2 font-semibold transition"
                                style={{ background: 'rgba(26, 26, 46, 0.12)', color: 'var(--accent-strong)' }}
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Quote
                <section className="w-full flex justify-center">
          <Card radius="lg" className="max-w-2xl w-full p-4 bg-white/70">
            <blockquote className="text-sm text-gray-700 italic">“One has no right to love or hate anything if one has not acquired a thorough knowledge of its nature.”</blockquote>
            <div className="text-xs text-gray-500 mt-2">— Leonardo da Vinci</div>
          </Card>
        </section> */}



                {/* Education */}
                <section className="w-full max-w-5xl px-4">
                    <h3 className="text-2xl font-bold mb-4">Education</h3>
                    {siteConfig.education && siteConfig.education.length > 0 ? (
                        <div className="space-y-3">
                            {siteConfig.education.map((e, i) => (
                                <EducationCard key={`edu-${i}`} institution={e.institution} location={e.location} degree={e.degree} dates={e.dates} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No education entries.</p>
                    )}
                </section>

                {/* Certifications */}
                <section className="w-full max-w-5xl px-4">
                    <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                    {siteConfig.certificates && siteConfig.certificates.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {siteConfig.certificates.map((c, i) => (
                                <CertificateCard key={`cert-${i}`} compact={false} name={c.name} provider={c.provider} link={c.link} issueDate={c.issueDate} expiryDate={c.expiryDate} image={c.image} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No certifications listed.</p>
                    )}
                </section>

                <Divider className="w-full max-w-5xl" />

                {/* Projects */}
                <section className="w-full max-w-5xl px-4">
                    <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {siteConfig.projects?.professional?.map((proj: any, idx: number) => (
                            <ProjectCard key={`prof-${idx}`} title={proj.title} subtitle={proj.subtitle} desc={proj.desc} github={proj.github} demo={proj.demo} chips={proj.chips} image={proj.image} />
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Personal Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {siteConfig.projects?.personal?.map((proj: any, idx: number) => (
                            <ProjectCard key={`pers-${idx}`} title={proj.title} subtitle={proj.subtitle} desc={proj.desc} github={proj.github} demo={proj.demo} chips={proj.chips} image={proj.image} />
                        ))}
                    </div>
                </section>

                <Divider className="w-full max-w-5xl" />

                {/* Technologies */}
                <section className="w-full max-w-5xl px-4">
                    <h3 className="text-xl font-bold mb-4">Languages</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
                        {siteConfig.skills?.languages.map((s: any, i: number) => (
                            <div key={`skill-${i}`} className="flex justify-center">
                                <SkillCard name={s.name} image={s.image} />
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-full max-w-5xl px-4">
                    <h3 className="text-xl font-bold mb-4">Frameworks & Libaries</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
                        {siteConfig.skills?.frameworks.map((s: any, i: number) => (
                            <div key={`skill-${i}`} className="flex justify-center">
                                <SkillCard name={s.name} image={s.image} />
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-full max-w-5xl px-4 pb-16">
                    <h3 className="text-xl font-bold mb-4">Misc. Skills</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
                        {siteConfig.skills?.dev.map((s: any, i: number) => (
                            <div key={`skill-${i}`} className="flex justify-center">
                                <SkillCard name={s.name} image={s.image} />
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </DefaultLayout>
    );
}
