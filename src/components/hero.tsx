import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Palette, Layers, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative pb-10 pt-24 md:pt-32 overflow-hidden">
            {/* Background element */}
            <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-70" />

            <div className="relative grid gap-6 grid-cols-1 lg:grid-cols-2 items-center">
                <div className="space-y-8">
                    <div className="space-y-5">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Transforming ideas into <span className="text-primary">visual stories</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-[600px]">
                            Graphic designer specializing in brand identity, digital design, and creative solutions that make your vision stand out.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/project">
                            <Button size="lg" className="gap-2">
                                View Portfolio <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline">Get in Touch</Button>
                        </Link>
                    </div>

                    <div className="flex gap-6 pt-6">
                        <div className="flex items-center gap-2">
                            <Palette className="h-5 w-5 text-primary" />
                            <span>Branding</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layers className="h-5 w-5 text-primary" />
                            <span>UI/UX</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-primary" />
                            <span>Digital</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-full w-full min-h-[400px] rounded-lg bg-muted/20 border backdrop-blur-sm overflow-hidden hidden lg:block">
                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
                        <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 p-2 flex items-end" />
                        <div className="aspect-square rounded-lg bg-gradient-to-tl from-secondary/10 to-secondary/30 p-2" />
                        <div className="aspect-square rounded-lg bg-gradient-to-tr from-muted-foreground/10 to-muted-foreground/20 p-2" />
                        <div className="aspect-square rounded-lg bg-gradient-to-bl from-background to-muted/50 p-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;