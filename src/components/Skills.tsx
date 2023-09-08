import lang from 'language.json';

const Skills = () => {
    return (
        <div>
            <h3>Skills</h3>
            <p>{lang.skills.join(', ')}</p>
        </div>
    );
};

export default Skills;