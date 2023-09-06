import lang from 'language.json';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__fullname">{lang.fullname}</h1>
            <h2 className="header__job-title">{lang.jobTitle}</h2>
        </header>
    );
};

export default Header;