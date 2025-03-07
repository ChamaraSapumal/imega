// src/components/project-grid.tsx
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/lib/data";

interface ProjectGridProps {
    featured?: boolean;
    category?: string;
}

const ProjectGrid = ({ featured = false, category }: ProjectGridProps) => {
    const projects = getProjects({ featured, category });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default ProjectGrid;