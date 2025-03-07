// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    const allProjects = getProjects();
    const categories = [...new Set(allProjects.map((project) => project.category))];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredProjects = selectedCategory
        ? getProjects({ category: selectedCategory })
        : allProjects;

    return (
        <div className="container px-4 py-12 mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Projects</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Explore our portfolio of design work across various industries and disciplines.
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    onClick={() => setSelectedCategory(null)}
                    className="rounded-full"
                >
                    All
                </Button>
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className="rounded-full"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                    >
                        <Link href={`/projects/${project.id}`} className="block h-full w-full">
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="flex flex-col p-6">
                                <div className="mb-2 flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">
                                        {project.category}
                                    </Badge>
                                    {project.featured && (
                                        <Badge variant="secondary" className="text-xs">
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm flex-grow">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex items-center text-sm text-primary font-medium">
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-1 h-4 w-4"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}