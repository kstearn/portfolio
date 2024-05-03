import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <Link to="/">
                HOME
            </Link>
            <Link to="/skills">
                SKILLS
            </Link>
            <Link to="/projects">
                PROJECTS
            </Link>
            <Link to="/aboutme">
                ABOUT
            </Link>
        </nav>
    )
}

export default Navigation;