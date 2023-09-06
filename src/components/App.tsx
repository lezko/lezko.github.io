import Header from 'components/Header';
import Contact from 'components/Contact';
import CareerObjective from 'components/CareerObjective';
import Education from 'components/Education';
import KnowledgeAndConcepts from 'components/KnowledgeAndConcepts';
import Skills from 'components/Skills';
import WorkExperience from 'components/WorkExperience';
import Projects from 'components/Projects';

const App = () => (
    <div className="app container">
        <Header />
        <Contact />
        <CareerObjective />
        <Education />
        <KnowledgeAndConcepts />
        <Skills />
        <WorkExperience />
        <Projects />
    </div>
);

export default App;
