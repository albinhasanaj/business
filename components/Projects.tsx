import React from 'react'
import Project from './Project'
import projectsData from '@/constants/projects'

// Define the type for the keys of projectsData
type Lang = keyof typeof projectsData;

//access lang from query params
const Projects = ({ lang }: { lang: Lang }) => {

    //get the projects for the current language
    const projects: typeof projectsData[Lang] = projectsData[lang]

    return (
        <section id='portfolio' className='flex flex-col'>
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