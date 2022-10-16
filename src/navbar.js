import { Link } from "react-router-dom";
const NavBar = () => {

    return (
        <nav className="navbar">
            <section className="top-nav">
                <div>
                    <h2><i className="fa-solid fa-camera"></i>16kstudio</h2>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
                </label>
                <ul className="menu">
                  <li><Link to=''>Home</Link> </li>
                  <li><Link to=''>Contact</Link> </li>
                  <li><Link to=''>About</Link> </li>
                </ul>
            </section>



            {/* <nav className="navbar navbar-expand-lg bg-light" style={style}>
                <div className="container-fluid">
                  <a className="navbar-brand" href="#"><h2><i className="fa-solid fa-camera"></i>16kStudio</h2></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                      <a className="nav-link" href="#">Contact</a>
                      <a className="nav-link" href="#">About</a>
                    </div>
                  </div>
                </div>
            </nav> */}
        </nav>
     );
}
 
export default NavBar;