import {FC} from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    repoUrl: string;
    demoUrl: string;
    img: string;
}

const ProjectCard: FC<ProjectCardProps> = ({title, description, repoUrl, demoUrl, img}) => {
    return (
        <div className="project-card">
            <img src={`img/${img}`} alt={title} />
            <h5 className="project-card__title">{title}</h5>
            <p className="project-card__description">{description}</p>
            <div className="project-card__links">
                <a target="_blank" href={repoUrl}>Source Code</a>
                <a target="_blank" href={demoUrl}>Demo</a>
            </div>
        </div>
    );
};

export default ProjectCard;