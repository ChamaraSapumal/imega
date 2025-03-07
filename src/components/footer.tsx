// src/components/footer.tsx
import Link from "next/link";
import { Instagram, Dribbble, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="container px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Imega<span className="text-orange-600">Infinity</span></h3>
                        <p className="text-sm text-muted-foreground">
                            Creating meaningful visual experiences that connect and inspire.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Navigation</h3>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
                            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Services</h3>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link href="/projects?category=branding" className="text-muted-foreground hover:text-foreground transition-colors">Branding</Link>
                            <Link href="/projects?category=ui-ux" className="text-muted-foreground hover:text-foreground transition-colors">UI/UX Design</Link>
                            <Link href="/projects?category=print" className="text-muted-foreground hover:text-foreground transition-colors">Print Design</Link>
                            <Link href="/projects?category=digital" className="text-muted-foreground hover:text-foreground transition-colors">Digital Media</Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://dribbble.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Dribbble className="h-5 w-5" />
                                <span className="sr-only">Dribbble</span>
                            </Link>
                            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="mailto:hello@designstudio.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} ImegaInfinity. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;