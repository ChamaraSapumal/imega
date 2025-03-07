"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import { Menu, X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavBar = () => {
    const pathname = usePathname();

    const routes = [
        { href: "/", label: "Home" },
        { href: "/project", label: "Projects" },
        { href: "/pricing", label: "Pricing" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },

    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl">Imega<span className="text-orange-600">Infinity</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "transition-colors hover:text-orange-600 text-foreground/60 relative py-2",
                                pathname === route.href && "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <ThemeSwitcher />
                    <Link href="/contact">
                        <Button className="px-6 bg-orange-600">Let&apos;s Talk</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:max-w-xs p-0 border-l">
                        <div className="h-full flex flex-col">
                            {/* Header with close button */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <Link href="/" className="flex items-center space-x-2">
                                    <span className="font-bold text-xl">Design<span className="text-orange-600">Studio</span></span>
                                </Link>
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="h-5 w-5" />
                                    </Button>
                                </SheetClose>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex-1 overflow-auto p-6">
                                <nav className="flex flex-col gap-1">
                                    {routes.map((route) => (
                                        <SheetClose asChild key={route.href}>
                                            <Link
                                                href={route.href}
                                                className={cn(
                                                    "text-foreground/70 hover:text-orange-600 hover:bg-muted transition-colors rounded-md p-3 text-lg",
                                                    pathname === route.href && "bg-primary/10 text-orange-600 font-medium"
                                                )}
                                            >
                                                {route.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </div>

                            {/* Footer with theme switcher and CTA */}
                            <div className="mt-auto p-6 border-t">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">Switch Theme</span>
                                        <ThemeSwitcher />
                                    </div>
                                    <SheetClose asChild>
                                        <Link href="/contact" className="w-full">
                                            <Button size="lg" className="w-full bg-orange-600">Let&apos;s Talk</Button>
                                        </Link>
                                    </SheetClose>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default NavBar;