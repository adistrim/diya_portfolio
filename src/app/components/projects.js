"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div id="projects" className="bg-white py-[6rem]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-4">Featured Projects</h2>
                <h3 className="text-lg font-light italic text-center mb-8">A glimpse of the projects I&apos;ve been working on ✨</h3>
                <div className="flex flex-col space-y-4 mb-10">
                    {projects.map((project) => (
                        <div key={project._id} className="bg-gray-100 p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex justify-between">
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#68B3A3] hover:underline"
                                    >
                                        GitHub
                                    </Link>
                                )}
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#68B3A3] hover:underline"
                                    >
                                        View
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className="text-lg font-light italic text-center mb-8">More can be found on my <Link href="https://github.com/diyamth" target="_blank"
                    rel="noopener noreferrer" className='text-[#68B3A3] font-semibold hover:underline'>GitHub</Link>!</h3>
            </div>
        </div>
    );
};

export default Projects;