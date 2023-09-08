import lang from 'language.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact</h3>
            <ul className="contact__list">
                <li><FontAwesomeIcon className="icon" icon={faEnvelope} /><a href={'mailto:' + lang.email}>{lang.email}</a></li>
                <li><FontAwesomeIcon className="icon" icon={faTelegram} /><a target="_blank" href={lang.telegram}>Telegram</a></li>
                <li><FontAwesomeIcon className="icon" icon={faGithub} /><a target="_blank" href={lang.github}>Github</a></li>
                <li><FontAwesomeIcon className="icon" icon={faLocationDot} /><span>{lang.location}</span></li>
            </ul>
        </div>
    );
};

export default Contact;