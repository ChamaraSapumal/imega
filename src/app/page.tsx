// src/app/page.tsx
import Hero from "@/components/hero";
import ProjectGrid from "@/components/project-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <Hero />

      <section className="py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
          <Link href="/project">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
        <ProjectGrid featured={true} />
      </section>

      <section className="py-16 bg-muted/50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-6">My Design Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Research & Discovery</h3>
            <p className="text-muted-foreground">Understanding your brand&apos;s essence and target audience to create designs that truly resonate.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Conceptualization</h3>
            <p className="text-muted-foreground">Transforming insights into creative concepts that communicate your unique message.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Refinement & Delivery</h3>
            <p className="text-muted-foreground">Perfecting every detail to deliver polished designs that exceed expectations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}