import { NavLink } from "react-router-dom";

const Header = () => {

    const changeColor = () => {
        // document.createAttribute('classNameName', 'active')
    }

    return (
            <div style={{borderBottom: '2px solid rgba(0, 0, 0, .1)', opacity: '0.8'}} className="container-fluid bg-dark fixed-top">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand nav_logo nav__logo" to="/"><span> NADEEM BIRDS </span></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-0 mb-lg-0">
                                        <li className="nav-item m-2">
                                            <NavLink style={{color: '#fff'}} exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/"><span><b className='nav_link'> HOME </b></span></NavLink>
                                        </li>
                                        <li className="nav-item m-2">
                                            <NavLink style={{color: '#fff'}} exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/products"><span><b className='nav_link'> PRODUCTS </b></span></NavLink>
                                        </li>
                                        <li className="nav-item m-2">
                                            <NavLink style={{color: '#fff'}} exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/contact"><span><b className='nav_link'> CONTACTUS </b></span></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    );
};

export default Header;