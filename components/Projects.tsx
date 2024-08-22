import React from 'react'
import Project from './Project'
import projects from '@/constants/projects'

const Projects = () => {
    return (
        <section className='flex flex-col'>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    bgColor={project.bgColor}
                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    index={index}
                    width={project.width}
                />
            ))}
        </section>
    )
}

export default Projects