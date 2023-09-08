import Header from 'components/Header';
import Contact from 'components/Contact';
import CareerObjective from 'components/CareerObjective';
import Education from 'components/Education';
import KnowledgeAndConcepts from 'components/KnowledgeAndConcepts';
import Skills from 'components/Skills';
import WorkExperience from 'components/WorkExperience';
import Projects from 'components/Projects';

function App() {
    return (
        <div className="app container">
            <Header />
            <main>
                <Contact />
                <CareerObjective />
                <Education />
                <KnowledgeAndConcepts />
                <Skills />
                <WorkExperience />
                <Projects />
            </main>
        </div>
    );
}

export default App;
