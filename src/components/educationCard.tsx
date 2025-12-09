import { Card, CardBody, Divider } from "@nextui-org/react";

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
        <Card className="w-full border-1 border-foreground-100 transition duration-500 ease-in-out hover:border-blue-400 shadow-md" disableAnimation={true}>
            <CardBody className="gap-2">
                <div>
                    <h3 className="text-base font-semibold">{institution}</h3>
                    <p className="text-xs text-foreground-500">{location}</p>
                </div>
                <Divider />
                <p className="text-sm">{degree}</p>
                <p className="text-xs text-foreground-500">{dates}</p>
            </CardBody>
        </Card>
    );
}
