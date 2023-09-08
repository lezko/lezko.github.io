import lang from 'language.json';

const KnowledgeAndConcepts = () => {
    return (
        <div>
            <h3>Knowledge / Concepts</h3>
            <p>{lang.knowledgeAndConcepts.join(', ')}</p>
        </div>
    );
};

export default KnowledgeAndConcepts;