import { Link } from "react-router-dom"
import './MainLayout.css';

const MainLayout = ({children}) => {
    return(
    <>
        <ul className="NavBar">
            <img src="https://next-u.eu/wp-content/uploads/2022/02/nextu-u-logo-couleur.png" alt="" className="logo"/>
            <hr />
            <li className="NavBar_Text">
                <Link to = "/courses">Cours</Link>
            </li>
            <li className="NavBar_Text">
                <Link to = "/">Home</Link>
            </li>
            
        </ul>
        <div className="children">
        {children}
        </div>
        <div className="Footer">
            <p>Footer</p>
        </div>

    </>
    );
};

export default MainLayout;