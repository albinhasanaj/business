import React from 'react'
import Project from './Project'
import projects from '@/constants/projects'

const Projects = () => {
    return (
        <section className='flex flex-col'>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    bgColor={index % 2 !== 0 ? 'bg-white' : 'bg-gray-100'}
                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    index={index}
                />
            ))}
        </section>
    )
}

export default Projects