import Header from './Header.js';
import Navigation from './Navigation.js';

const Layout = ({ children }) => {
    return(
        <div className="Layout">
            <Header />
            {children}
            <Navigation />
        </div>
    )
}

export default Layout;