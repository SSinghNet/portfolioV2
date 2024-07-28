import { ThemeSwitch } from "@/components/theme-switch";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
                {children}
                <ThemeSwitch className="fixed bottom-14 right-10 z-50" size={35}></ThemeSwitch>
            </main>
            <footer className="w-full flex items-center justify-center py-3 bg-background z-50">
                <span className="text-default-600">&nbsp;</span>
            </footer>
            <footer className="w-full flex items-center justify-center py-3 fixed bottom-0 bg-background z-50">
                <span className="text-default-600">&copy; SSingh.Net</span>
            </footer>
        </div>
    );
}
