// src/components/project-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
}

const ProjectCard = ({ id, title, description, category, image }: ProjectCardProps) => {
    return (
        <Link href={`/projects/${id}`}>
            <Card className="overflow-hidden h-full transition-all hover:scale-[1.02] hover:shadow-md">
                <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">{category}</Badge>
                    <h3 className="font-semibold text-xl mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm">{description}</p>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProjectCard;