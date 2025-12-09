import { Card, CardBody, CardHeader, CardFooter, Tooltip, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default function CertificateCard({
    name,
    provider,
    link,
    issueDate,
    expiryDate,
    image,
    compact,
}: {
    name: string;
    provider?: string;
    link: string;
    issueDate?: string;
    expiryDate?: string;
    image?: string;
    compact?: boolean;
}) {
    if (compact) {
        return (
            <div className="flex items-center gap-3 w-full max-w-3xl bg-foreground-50 p-3 rounded-md shadow-sm border-1 border-foreground-100">
                {image ? (
                    <Image src={"./" + image} alt={name} className="h-20 w-20 object-cover rounded-sm" removeWrapper />
                ) : (
                    <div className="h-14 w-14 bg-foreground-100 rounded-sm flex items-center justify-center">{provider ? provider.charAt(0) : "C"}</div>
                )}
                <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14" className="mr-1">
                                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Certified
                        </span>
                        <span className="text-xs text-foreground-500">Credential held</span>
                    </div>
                    <div className="text-sm md:text-base font-semibold">{name}</div>
                    <div className="text-xss text-foreground-500">{provider} • Issued: {issueDate ?? '-'} • Expires: {expiryDate ?? '-'}</div>
                </div>
                <div>
                    <Tooltip content="Verify credential" showArrow>
                        <Link isExternal href={link} className={buttonStyles({ variant: "ghost", radius: "sm" }) + " text-xs px-3 py-1"}>
                            Verify
                        </Link>
                    </Tooltip>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <Card className="w-full border-1 border-foreground-100 transition duration-500 ease-in-out hover:border-blue-400 h-full flex" shadow="md" disableAnimation={true}>

                <CardHeader className="m-0 p-0 static justify-center">
                    {image ?
                        <Image
                            className="h-28 w-full object-cover m-0 p-0 rounded-none justify-center"
                            src={"./" + image}
                            shadow="sm"
                            removeWrapper
                        />
                        : 
                        <div className="flex h-28 m-0 p-0 border-1 border-foreground-100 w-full rounded-none justify-center shadow-md">
                            <span className="content-center text-lg max-w-fit">
                                {provider ?? "Certification"}
                            </span>
                        </div>
                    }
                </CardHeader>
                <CardBody className="content-center text-left">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    {provider ? <h3 className="text-sm font-medium">{provider}</h3> : null}
                    <p className="text-sm my-1">Issued: {issueDate ?? "-"} • Expires: {expiryDate ?? "-"}</p>
                </CardBody>

                <CardFooter className="gap-1 text-center justify-center w-full">
                    <Tooltip content="Verify credential" showArrow>
                        <Link isExternal href={link} className={buttonStyles({ variant: "light", radius: "full" }) + " bg-foreground-100 w-min min-w-10 p-2 text-sm"}>
                            Verify
                        </Link>
                    </Tooltip>
                </CardFooter>
                <div className="mb-14"></div>
            </Card>
        </div>
    );
}
