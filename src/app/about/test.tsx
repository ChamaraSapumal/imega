// src/app/about/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Award,
    Users,
    Globe,
    Heart,
    Download
} from "lucide-react";

export const metadata = {
    title: "About | Design Portfolio",
    description: "Learn more about my background, skills, and approach to design.",
};

export default function AboutPage() {
    return (
        <div className="container px-4 py-12 mx-auto">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            I&apos;m a passionate graphic designer with over 7 years of experience creating impactful visual solutions for brands across various industries.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            My approach combines strategic thinking with creative execution, ensuring that every design not only looks beautiful but also effectively communicates your message to the right audience.
                        </p>
                        <p className="text-muted-foreground mb-8">
                            I believe great design is born from collaboration, curiosity, and a deep understanding of the problem at hand. My goal is to create work that resonates, inspires, and drives results.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href="/contact">Let&apos;s Work Together</Link>
                            </Button>
                            <Button variant="outline" className="gap-2">
                                <Download className="h-4 w-4" />
                                Download Resume
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                            src="/images/profile.jpg"
                            alt="Designer portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">My Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border rounded-lg">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Award className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
                            <p className="text-muted-foreground">Creating cohesive visual identities that express your brand&apos;s unique personality and values.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                            <p className="text-muted-foreground">Designing intuitive, user-centered digital experiences that prioritize functionality and aesthetics.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Globe className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Digital Design</h3>
                            <p className="text-muted-foreground">Creating engaging visuals for websites, social media, and digital marketing campaigns.</p>
                        </div>
                        <div className="p-6 border rounded-lg">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Heart className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Print Design</h3>
                            <p className="text-muted-foreground">Crafting impactful print materials from packaging to publications with attention to detail.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-10 text-center">My Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted" />
                        <div className="space-y-12 relative">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1 relative z-10">
                                    <div className="p-6 bg-card border rounded-lg">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Step 1</span>
                                        <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                                        <p className="text-muted-foreground">I start by understanding your business goals, target audience, and project requirements through in-depth research and conversations.</p>
                                    </div>
                                </div>
                                <div className="md:order-2 flex justify-center">
                                    <div className="h-16 w-16 rounded-full bg-background border-4 flex items-center justify-center z-10">
                                        <span className="text-xl font-bold">1</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 relative z-10">
                                    <div className="p-6 bg-card border rounded-lg">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Step 2</span>
                                        <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                                        <p className="text-muted-foreground">Developing a creative strategy that aligns with your objectives and sets the foundation for the design direction.</p>
                                    </div>
                                </div>
                                <div className="order-1 flex justify-center">
                                    <div className="h-16 w-16 rounded-full bg-background border-4 flex items-center justify-center z-10">
                                        <span className="text-xl font-bold">2</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1 relative z-10">
                                    <div className="p-6 bg-card border rounded-lg">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Step 3</span>
                                        <h3 className="text-xl font-semibold mb-2">Creation</h3>
                                        <p className="text-muted-foreground">Translating concepts into visual solutions through iterative design exploration and development.</p>
                                    </div>
                                </div>
                                <div className="md:order-2 flex justify-center">
                                    <div className="h-16 w-16 rounded-full bg-background border-4 flex items-center justify-center z-10">
                                        <span className="text-xl font-bold">3</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 relative z-10">
                                    <div className="p-6 bg-card border rounded-lg">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Step 4</span>
                                        <h3 className="text-xl font-semibold mb-2">Refinement</h3>
                                        <p className="text-muted-foreground">Perfecting the design through feedback, revisions, and attention to the smallest details.</p>
                                    </div>
                                </div>
                                <div className="order-1 flex justify-center">
                                    <div className="h-16 w-16 rounded-full bg-background border-4 flex items-center justify-center z-10">
                                        <span className="text-xl font-bold">4</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1 relative z-10">
                                    <div className="p-6 bg-card border rounded-lg">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Step 5</span>
                                        <h3 className="text-xl font-semibold mb-2">Delivery</h3>
                                        <p className="text-muted-foreground">Providing final assets in all necessary formats with clear implementation guidelines for optimal results.</p>
                                    </div>
                                </div>
                                <div className="md:order-2 flex justify-center">
                                    <div className="h-16 w-16 rounded-full bg-background border-4 flex items-center justify-center z-10">
                                        <span className="text-xl font-bold">5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to start your project?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let&apos;s collaborate to create something amazing together that meets your goals and exceeds your expectations.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}