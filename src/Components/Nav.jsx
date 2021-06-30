import { Link } from "react-router-dom";

function Nav() {
    return (

        <nav>
              <Link to="/">Home</Link>

              <Link to="/song">Songs</Link>

              <Link to="/form">Form</Link>
        </nav>
      
    )
}

export default Nav;