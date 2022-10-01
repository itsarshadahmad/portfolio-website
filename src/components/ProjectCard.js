import React from 'react'

export default function ProjectCard({ image, link, title, description }) {
    return (
        <div>
            <div className="project">
                <img src={image} alt="Project Screenshot" className="project-image" />
                <h1 className="project-title">{title}</h1>
                <p className="project-description">{description}</p>
                <a href={link} rel="noopener noreferrer" target="_blank" className="project-link">Github
                    link</a>
            </div>
        </div>
    )
}
