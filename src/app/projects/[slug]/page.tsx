// src/app/projects/[slug]/page.tsx
import { getProjectById } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectById(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container px-4 py-12 mx-auto">
            <Link href="/project">
                <Button variant="ghost" className="mb-8 p-0 flex items-center gap-2 hover:bg-transparent">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Projects</span>
                </Button>
            </Link>

            <div className="grid gap-12 md:gap-16">
                <div>
                    <Badge variant="outline" className="mb-4">{project.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-[800px]">{project.description}</p>
                </div>

                <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                        <div className="prose dark:prose-invert max-w-none">
                            <p>{project.content}</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Client</h3>
                            <p className="text-muted-foreground">{project.client}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Year</h3>
                            <p className="text-muted-foreground">{project.year}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Services</h3>
                            <ul className="space-y-1">
                                {project.services.map((service) => (
                                    <li key={service} className="text-muted-foreground">{service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((image, index) => (
                            <div key={index} className="aspect-[16/9] relative rounded-lg overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`${project.title} detail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}