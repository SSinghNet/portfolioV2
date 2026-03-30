import { Card, Tooltip, Image } from "@nextui-org/react";
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
    // Compact horizontal pill-style certificate (used in lists)
    if (compact) {
        return (
            <div className="w-full max-w-3xl flex items-center gap-4 p-3 rounded-md shadow-sm border" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,0.6))', borderColor: 'rgba(124,58,237,0.08)'}}>
                <div className="w-1 rounded-l-md" style={{background: 'linear-gradient(180deg,var(--accent),var(--accent-strong))'}} />
                <div className="flex items-center gap-3 flex-1">
                    {image ? (
                        <Image src={"./" + image} alt={name} className="h-16 w-16 object-cover rounded-md" removeWrapper />
                    ) : (
                        <div className="h-16 w-16 rounded-md flex items-center justify-center text-sm font-semibold text-white" style={{background: 'var(--accent)'}}>{provider ? provider.charAt(0) : "C"}</div>
                    )}
                    <div className="text-left">
                        <div className="text-sm font-semibold">{name}</div>
                        <div className="text-xss text-muted">{provider} • Issued: {issueDate ?? '-'} • Expires: {expiryDate ?? '-'}</div>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <Tooltip content="Verify credential" showArrow>
                        <Link isExternal href={link} className={buttonStyles({ variant: "ghost", radius: "sm" }) + " text-xs px-3 py-1"}>
                            Verify
                        </Link>
                    </Tooltip>
                </div>
            </div>
        );
    }

    // Full card with left accent stripe and more formal layout
    return (
        <div className="w-full">
            <Card className="w-full card overflow-hidden">
                <div className="flex">
                    <div className="w-1" style={{background: 'linear-gradient(180deg,var(--accent),var(--accent-strong))'}}></div>
                    <div className="flex-1 p-4 md:p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-20 h-20 flex-shrink-0">
                                {image ? (
                                    <Image src={"./" + image} alt={name} className="h-20 w-20 object-cover rounded-md" removeWrapper />
                                ) : (
                                    <div className="h-20 w-20 rounded-md flex items-center justify-center text-sm font-semibold text-white" style={{background: 'var(--accent)'}}>
                                        {provider ?? "Cert"}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1">
                                <h2 className="text-lg font-semibold" style={{color: 'var(--text-primary)'}}>{name}</h2>
                                {provider ? <div className="text-sm text-muted" style={{color: 'var(--muted)'}}>{provider}</div> : null}
                                <div className="text-sm mt-1 text-muted" style={{ color: 'var(--muted)' }}>Issued: {issueDate ?? "-"}</div>
                                <div className="text-sm mt-1 text-muted" style={{ color: 'var(--muted)' }}>{expiryDate ? "Expires: " + expiryDate : ""}</div>
                            </div>

                            <div className="flex-shrink-0 self-start">
                                <Tooltip content="Verify credential" showArrow>
                                    <Link isExternal href={link} className={buttonStyles({ variant: "light", radius: "full" }) + " btn-primary"}>
                                        Verify
                                    </Link>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
