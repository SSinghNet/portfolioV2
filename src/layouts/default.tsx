import { ThemeSwitch } from "@/components/theme-switch";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col min-h-screen">
            <div className="fixed top-6 right-6 z-50">
                <ThemeSwitch size={28} />
            </div>
            <main className="container mx-auto max-w-5xl px-6 flex-grow py-12">
                {children}
            </main>
        </div>
    );
}
