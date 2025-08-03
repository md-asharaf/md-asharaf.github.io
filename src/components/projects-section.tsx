"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
    delay: number;
}

export function Projects({ delay }: ProjectsSectionProps) {
    const [activeTab, setActiveTab] = useState("works");

    // For now, all projects are personal works
    // You can add a 'type' field to your projects in the future to separate them
    const personalProjects = DATA.projects;
    const clientProjects: (typeof DATA.projects[0])[] = []; // Empty for now

    const currentProjects = activeTab === "works" ? personalProjects : clientProjects;

    return (
        <div className="space-y-8">
            {/* Tab Navigation */}
            <BlurFade delay={delay}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                            Featured Projects
                        </div>
                        {/* Tab Buttons */}
                        <div className="flex justify-center space-x-1 bg-muted p-1 rounded-lg max-w-md mx-auto shadow-sm">
                            <button
                                onClick={() => setActiveTab("works")}
                                className={cn(
                                    "px-4 py-1 text-sm font-medium rounded-md transition-all duration-200",
                                    activeTab === "works"
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                My Works ({personalProjects.length})
                            </button>
                            <button
                                onClick={() => setActiveTab("clients")}
                                className={cn(
                                    "px-4 py-1 text-sm font-medium rounded-md transition-all duration-200",
                                    activeTab === "clients"
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Client Works ({clientProjects.length})
                            </button>
                        </div>
                        <div className="mt-20"><h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Check out my latest work
                        </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I&apos;ve worked on a variety of projects, from simple
                                websites to complex web applications. Here are a few of my
                                favorites.
                            </p></div>
                    </div>
                </div>
            </BlurFade>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {currentProjects.length > 0 ? (
                    currentProjects.map((project, id) => (
                        <BlurFade
                            key={`${activeTab}-${project.title}`}
                            delay={delay + 0.1 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))
                ) : (
                    <BlurFade delay={delay + 0.1}>
                        <div className="col-span-full text-center py-12">
                            <p className="text-muted-foreground">
                                {activeTab === "clients"
                                    ? "Client projects coming soon!"
                                    : "No projects available"}
                            </p>
                        </div>
                    </BlurFade>
                )}
            </div>
        </div>
    );
}
