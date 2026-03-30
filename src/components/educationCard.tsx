import { Card, CardBody, Divider } from "@nextui-org/react";

const GraduationCapIcon = (props: { className?: string; size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={props.className || ""}
        width={props.size || 24}
        height={props.size || 24}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v7.5m0 0l-6-3m6 3l6-3" />
    </svg>
);

export default function EducationCard({
    institution,
    location,
    degree,
    dates,
}: {
    institution: string;
    location: string;
    degree: string;
    dates: string;
}) {
    return (
        <Card className="w-full card shadow-lg transition duration-300 ease-in-out">
            <CardBody className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3 mb-2">
                    <GraduationCapIcon className="text-accent" size={28} />
                    <div>
                        <h3 className="text-lg font-bold" style={{color: 'var(--text-primary)'}}>{institution}</h3>
                        <p className="text-xs" style={{color: 'var(--accent)'}}>{location}</p>
                    </div>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-col gap-1">
                    <span className="text-base font-medium" style={{color: 'var(--text-primary)'}}>{degree}</span>
                    <span className="text-xs" style={{color: 'var(--muted)'}}>{dates}</span>
                </div>
            </CardBody>
        </Card>
    );
}
