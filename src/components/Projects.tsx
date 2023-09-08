import lang from 'language.json';
import ProjectCard from 'components/ProjectCard';

const Projects = () => {
    return (
        <div className="projects">
            <h3>Projects</h3>
            <ul>{lang.projects.map(p =>
                <ProjectCard
                    title={p.title}
                    description={p.description}
                    repoUrl={p.repoUrl}
                    demoUrl={p.demoUrl}
                    img={p.img}
                />
            )}</ul>
        </div>
    );
};

export default Projects;