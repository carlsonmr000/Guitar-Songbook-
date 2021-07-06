import { Link } from "react-router-dom";

function Nav() {
    return (

        <nav>
              <Link to="/">Home</Link>

              <Link to="/form">Add a new song</Link>
        </nav>
      
    )
}

export default Nav;